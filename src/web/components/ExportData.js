import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { getData } from '../utils/selectors';
import { trackEvent } from '../utils/tracking';

import { MainButton } from '../primitives/Button';

class ExportData extends Component {
  static propTypes = {
    data: PropTypes.any,
  };

  static defaultProps = {
    data: null,
  };

  state = {
    open: false,
    copied: false,
    json: JSON.stringify(this.props.data, null, 2),
  };

  showExportData = () => {
    trackEvent('export-data');
    this.setState({ open: true });
  };

  // copy json result from forms to clipboard
  copyToClipboard = () => {
    // create a temporary (and hidden) element for text selection
    const temp = document.createElement('textarea');
    const text = document.createTextNode(this.state.json);
    temp.appendChild(text);
    document.body.appendChild(temp);

    // select textarea to enable copying
    temp.focus();
    temp.select();

    // copy json
    try {
      document.execCommand('copy');
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('Could not copy to clipboard', err);
    }

    // clean up · remove temporary element
    temp.remove();

    // let user know that json is copied, for some time
    this.setState({ copied: true });
    setTimeout(() => {
      this.setState({ copied: false });
    }, 20000);
  };

  render() {
    const buttonText = this.state.copied ? 'Lagret til utklippstavlen!' : 'Kopier svarene til utklippstavlen';

    return (
      <div>
        <MainButton onClick={this.copyToClipboard}>{buttonText}</MainButton>
      </div>
    );
  }
}

const mapStateToProps = (state, { exporter }) => ({
  data: exporter(getData(state)),
});

export default connect(mapStateToProps)(ExportData);
