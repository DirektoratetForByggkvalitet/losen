import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind';
import get from 'lodash.get';

import checkStatus from '../../../shared/checkstatus';
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
    SGsource: PropTypes.string,
    SGheading: PropTypes.string,
    SGtext: PropTypes.string,
    invalidapproval: PropTypes.string,
  };

  static defaultProps = {
    information: '',
    currentValue: {},
    SGsource: '',
    invalidapproval: '',
    SGheading: '',
    SGtext: '',
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
    const id = orgid.toString().replace(/\s/g, '');
    fetch(`${this.props.source}%27${id}%27`)
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
    const id = orgid.toString().replace(/\s/g, '');
    fetch(`${this.props.SGsource}${id}.json`)
      .then(checkStatus)
      .then((data) => {
        this.updateSGData(data);
      })
      .catch((error) => {
        const { property, setData } = this.props;
        setData(property, {
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
    if (value && value.toString().replace(/\s/g, '').length === 9) {
      this.setState({ loadingOrg: true, loadingSG: true });
      this.fetchOrgData(value);
      this.fetchSGData(value);
    } else {
      setData(property, { dataOrg: false, dataSG: false });
    }
  }

  render() {
    const { loadingOrg, loadingSG } = this.state;
    const { information, property, setData, SGheading, SGtext } = this.props;
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
          {get(this.props, 'currentValue.fetchSG', false)}
          <div>
            {loadingSG && <H3>Laster inn data...</H3>}
            {!loadingSG &&
              get(this.props, 'currentValue.dataSG', false) && (
                <div>
                  <H3>
                    <VariableText
                      text={SGheading}
                      data={this.props.currentValue}
                    />
                  </H3>
                  <VariableText text={SGtext} data={this.props.currentValue} />
                  <ApprovalAreas
                    areas={get(this.props, 'currentValue.validApprovalAreas')}
                  />
                </div>
              )}
          </div>
        </div>
      </div>
    );
  }
}
