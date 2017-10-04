import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind';
import get from 'lodash.get';

import Input from './Input';
import { H3 } from '../../primitives/Heading';
import DL from '../../primitives/Datalist';
import ErrorIcon from '../graphics/ErrorIcon';
import Information from '../../primitives/Information';
import Html from '../helper/Html';
import ApprovalAreas from '../ApprovalAreas';
import VariableText from '../helper/VariableText';

export default class FetchOrg extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
    information: PropTypes.string,
    setData: PropTypes.func.isRequired,
    property: PropTypes.string.isRequired,
    currentValue: PropTypes.object,
  };

  static defaultProps = {
    information: '',
    currentValue: {},
  };

  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      loadingOrg: false,
      loadingSG: false,
    };
  }

  fetchOrgData(orgid) {
    fetch(`${this.props.source}%27${orgid}%27`)
      .then(response => response.json())
      .then((data) => {
        this.updateOrgData(data, orgid);
      });
  }

  updateOrgData(data, orgid) {
    const { property, setData } = this.props;
    const name = get(data, 'data[0].navn');
    const postcode = get(data, 'data[0].forretningsadresse.postnummer');
    const postplace = get(data, 'data[0].forretningsadresse.poststed');
    const address = get(data, 'data[0].forretningsadresse.adresse');
    this.setState({ loadingOrg: false });

    setData(property, {
      ...this.props.currentValue,
      orgid,
      name,
      postcode,
      postplace,
      address,
      dataOrg: true,
    });
  }

  fetchSGData(orgid) {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    // TODO: Put source in api
    // Old value `${proxyurl}${this.props.source}${orgid}.json`
    fetch(`${proxyurl}https://sgregister.dibk.no/api/enterprises/${orgid}.json`)
      .then(response => response.json())
      .then((data) => {
        this.updateSGData(data);
      })
      .catch((error) => {
        const { property, setData } = this.props;
        setData(property, {
          orgid,
          name: '',
          status: '',
          validApprovalAreas: '',
          dataSG: false,
        });
        this.setState({ loadingSG: false });
        // eslint-disable-next-line no-console
        console.log(`There is an error fetching from SG: ${error.message}`);
      });
  }

  updateSGData(data) {
    const { property, setData } = this.props;
    const status = get(data, 'dibk-sgdata.status');
    const validApprovalAreas = get(data, 'dibk-sgdata.valid_approval_areas');
    setData(property, {
      ...this.props.currentValue,
      status,
      validApprovalAreas,
      dataSG: true,
    });
    this.setState({ loadingSG: false });
  }

  update(value) {
    const { property, setData } = this.props;
    if (value && value.toString().length === 9) {
      this.setState({ loadingOrg: true, loadingSG: true });
      this.fetchOrgData(value);
      this.fetchSGData(value);
    } else {
      // TODO: Handle reset of SG data better
      setData(property, { dataOrg: false });
    }
  }

  render() {
    const { loadingOrg, loadingSG } = this.state;
    const { information, property, setData } = this.props;
    return (
      <div>
        <Input
          {...this.props}
          currentValue={get(this.props, 'currentValue.orgid')}
          setData={(unused, value) => {
            setData(property, { orgid: value });
          }}
          update={this.update}
        />
        {loadingOrg && <H3>Laster inn data...</H3>}
        {get(this.props, 'currentValue.dataOrg', false) && (
          <div>
            <br />
            <DL>
              <dt>Firmaets navn</dt>
              <dd>{get(this.props, 'currentValue.name')}</dd>

              <dt>Adresse</dt>
              <dd>{get(this.props, 'currentValue.address')}</dd>

              <dt>Postnummer- og sted</dt>
              <dd>
                {get(this.props, 'currentValue.postcode')}{' '}
                {get(this.props, 'currentValue.postplace')}
              </dd>
            </DL>
            <Information>
              <ErrorIcon triangleFill={'black'} />
              <Html text={information} />
            </Information>
          </div>
        )}
        <div>
          {get(this.props, 'currentValue.fetch')}
          <div>
            {loadingSG && <H3>Laster inn data...</H3>}
            {!loadingSG &&
              get(this.props, 'currentValue.dataSG', false) && (
                <div>
                  <H3>
                    {/* TODO: putt hardcoded text into api */}
                    <VariableText
                      text={
                        '${name} er registrert med sentral godkjenning for følgende områder'
                      }
                      data={this.props.currentValue}
                    />
                  </H3>
                  <VariableText
                    text={
                      'Godkjenningen er til ${status.approval_period_to} og viser hvilke fagområder firmaet har kompetanse på. Du kan likevel erklære ansvar for ansvarsområder som ligger utenfor den sentrale godkjenningen hvis firmaet ditt har nødvendig kunnskap og erfaring fra også det området.'
                    }
                    data={this.props.currentValue}
                  />
                  <ApprovalAreas
                    areas={get(this.props, 'currentValue.validApprovalAreas')}
                  />
                </div>
              )}
            {!loadingSG &&
              !get(this.props, 'currentValue.dataSG', false) && (
                <H3>Kunne ikke finne </H3>
              )}
          </div>
        </div>
      </div>
    );
  }
}
