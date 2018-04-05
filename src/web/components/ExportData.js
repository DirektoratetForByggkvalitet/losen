import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { getData } from '../utils/selectors';
import { trackEvent } from '../utils/tracking';

import { MainButton } from '../primitives/Button';
import { Textarea } from '../primitives/Input';

class ExportData extends Component {
  static propTypes = {
    data: PropTypes.any,
  };

  static defaultProps = {
    data: null,
  };

  state = { open: false };

  selectText = () => this.textarea.select();

  showExportData = () => {
    trackEvent('export-data');
    this.setState({ open: true });
  };

  render() {
    const { data } = this.props;

    const json = JSON.stringify(data, null, 2);
    const lines = json.split(/\n/).length;

    return (
      <div>
        <Textarea
          rows={lines}
          innerRef={textarea => (this.textarea = textarea)}
          onClick={this.selectText}
          value={json}
          read-only
        />
        <MainButton>Kopier svar</MainButton>
      </div>
    );
  }
}

const mapStateToProps = (state, { exporter }) => ({
  data: exporter(getData(state)),
});

export default connect(mapStateToProps)(ExportData);
