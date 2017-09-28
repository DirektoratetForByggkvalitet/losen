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
    currentValue: PropTypes.any,
    invalidapproval: PropTypes.string,
  };

  static defaultProps = {
    information: '',
    disabled: false,
    heading: '',
    text: '',
    currentValue: undefined,
    invalidapproval: '',
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
        console.log('YTOYOYOYO');
        const { property, setData } = this.props;
        setData(property, {
          orgid,
          name: '',
          status: '',
          validApprovalAreas: '',
          data: false,
        });
        this.setState({ loading: false });
        // eslint-disable-next-line no-console
        console.log(`There is an error fetching from SG: ${error.message}`);
      });
  }

  updateData(data, orgid) {
    const { property, setData } = this.props;
    const status = get(data, 'dibk-sgdata.status');
    const validApprovalAreas = get(data, 'dibk-sgdata.valid_approval_areas');
    const name = get(data, 'dibk-sgdata.enterprise.name');
    setData(property, {
      orgid,
      name,
      status,
      validApprovalAreas,
      data: true,
    });
    this.setState({ loading: false });
  }

  render() {
    const { disabled, property, heading, text, invalidapproval } = this.props;
    const { loading } = this.state;
    return (
      <div>
        {get(this.props, 'currentValue.fetch')}
        <StyledBlock id={property} disabled={disabled}>
          {loading && <H3>Laster inn data...</H3>}
          {!loading &&
            get(this.props, 'currentValue.data', false) && (
              <div>
                <H3>
                  <VariableText text={heading} data={this.props.currentValue} />
                </H3>
                <VariableText text={text} data={this.props.currentValue} />
                <ApprovalAreas
                  areas={get(this.props, 'currentValue.validApprovalAreas')}
                />
              </div>
            )}
          {!loading &&
            !get(this.props, 'currentValue.data', false) && (
              <H3>{invalidapproval}</H3>
            )}
        </StyledBlock>
      </div>
    );
  }
}
