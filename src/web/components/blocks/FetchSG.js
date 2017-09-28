import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind';
import get from 'lodash.get';

import ApprovalAreas from '../ApprovalAreas';
import { H3 } from '../../primitives/Heading';
import { SpecificBlock as StyledBlock } from '../../primitives/Block';
import VariableText from '../helper/VariableText';

export default class FetchSG extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
    setData: PropTypes.func.isRequired,
    property: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    heading: PropTypes.string,
    text: PropTypes.string,
  };

  static defaultProps = {
    information: '',
    disabled: false,
    heading: '',
    text: '',
  };

  constructor(props) {
    super(props);
    autobind(this);
    this.state = {
      loading: false,
    };
  }

  componentWillMount() {
    const { property, setData } = this.props;
    const orgid = get(this.props, 'data.orgnr.orgid', false);
    if (orgid) {
      this.setState({ loading: true });
      this.fetchData(orgid);
    } else {
      setData(property, { data: false });
    }
  }

  fetchData(orgid) {
    const proxyurl = 'https://cors-anywhere.herokuapp.com/';
    fetch(`${proxyurl}${this.props.source}${orgid}.json`)
      .then(response => response.json())
      .then((data) => {
        this.updateData(data, orgid);
      })
      .catch((error) => {
        this.updateData(false, orgid);
        // eslint-disable-next-line no-console
        console.log(`There is an error fetching from SG: ${error.message}`);
      });
  }

  updateData(data, orgid) {
    const { property, setData } = this.props;
    if (data) {
      const status = get(data, 'dibk-sgdata.status');
      const validApprovalAreas = get(data, 'dibk-sgdata.valid_approval_areas');
      setData(property, {
        orgid,
        status,
        validApprovalAreas,
        data: true,
        fetch: false,
      });
    } else {
      setData(property, {
        orgid,
        status: '',
        validApprovalAreas: '',
        data: false,
        fetch: false,
      });
    }
    this.setState({ loading: false });
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
    /* TODO: Has to be triggered by changes to FetchOrg */
    const { disabled, property, heading, text } = this.props;
    const { loading } = this.state;
    return (
      <div>
        {get(this.props, 'currentValue.fetch')}
        <StyledBlock id={property} disabled={disabled}>
          {loading && <H3>Laster inn data...</H3>}
          {get(this.props, 'currentValue.data', false) && (
            <div>
              <H3>
                <VariableText text={heading} />
              </H3>
              <VariableText text={text} />
              <ApprovalAreas areas={get(this.props, 'currentValue.validApprovalAreas')} />
            </div>
          )}
          {!get(this.props, 'currentValue.data', false) && (
            <H3>Vi fant ikke godkjenningen din i systemet vårt</H3>
          )}
        </StyledBlock>
      </div>
    );
  }
}
