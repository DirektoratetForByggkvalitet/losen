import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind';
import get from 'lodash.get';

import Number from './Number';
import { H3 } from '../../primitives/Heading';
import DL from '../../primitives/Datalist';
import ErrorIcon from '../graphics/ErrorIcon';
import Information from '../../primitives/Information';
import Html from '../helper/Html';

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
      loading: false,
    };
  }

  fetchData(orgid) {
    fetch(`${this.props.source}%27${orgid}%27`)
      .then(response => response.json())
      .then((data) => {
        this.updateData(data, orgid);
      });
  }

  updateData(data, orgid) {
    const { property, setData } = this.props;
    const name = get(data, 'data[0].navn');
    const postcode = get(data, 'data[0].forretningsadresse.postnummer');
    const postplace = get(data, 'data[0].forretningsadresse.poststed');
    const address = get(data, 'data[0].forretningsadresse.adresse');
    this.setState({ loading: false });
    setData(property, {
      orgid,
      name,
      postcode,
      postplace,
      address,
      data: true,
    });
  }

  update(value) {
    const { property, setData } = this.props;
    if (value.toString().length === 9) {
      this.setState({ loading: true });
      this.fetchData(value);
    } else {
      setData(property, { data: false });
    }
  }

  render() {
    const { loading } = this.state;
    const { information, property, setData } = this.props;
    return (
      <div>
        <Number
          {...this.props}
          currentValue={get(this.props, 'currentValue.orgid')}
          setData={(unused, value) => {
            setData(property, { orgid: value });
          }}
          update={this.update}
          minimum={0}
          maximum={999999999}
        />
        {loading && <H3>Laster inn data...</H3>}
        {get(this.props, 'currentValue.data', false) && (
          <div>
            <br />
            <DL>
              <dt>Firmaets navn</dt>
              <dd>{get(this.props, 'currentValue.name')}</dd>

              <dt>Adresse</dt>
              <dd>{get(this.props, 'currentValue.address')}</dd>

              <dt>Postnummer- og sted</dt>
              <dd>{get(this.props, 'currentValue.postcode')} {get(this.props, 'currentValue.postplace')}</dd>
            </DL>
            <Information>
              <ErrorIcon triangleFill={'black'} />
              <Html text={information} />
            </Information>
          </div>
        )}
      </div>
    );
  }
}
