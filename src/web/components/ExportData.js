import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Textarea } from '../primitives/Input';
import { MainButton } from '../primitives/Button';
import { getData } from '../utils/selectors';

class ExportData extends Component {
  static propTypes = {
    data: PropTypes.any,
  }

  static defaultProps = {
    data: null,
  }

  state = { open: false }

  selectText = () => this.textarea.select()
  showExportData = () => this.setState({ open: true })

  render() {
    const { data } = this.props;
    const { open } = this.state;

    if (!open) {
      return <MainButton onClick={this.showExportData}>GIMME DAT JSON 🤓</MainButton>;
    }

    const json = JSON.stringify(data, null, 2);
    const lines = json.split(/\n/).length;

    return (
      <Textarea
        rows={lines}
        innerRef={textarea => this.textarea = textarea}
        onClick={this.selectText}
        value={json}
        read-only
      />
    );
  }
}

const mapStateToProps = (state, { exporter }) => ({
  data: exporter(getData(state)),
});

export default connect(mapStateToProps)(ExportData);
