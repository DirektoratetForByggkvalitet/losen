import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { getData } from '../utils/selectors';
import track from '../utils/tracking';

import { MainButton } from '../primitives/Button';
import { Textarea } from '../primitives/Input';

class ExportData extends Component {
  static propTypes = {
    data: PropTypes.any,
  }

  static defaultProps = {
    data: null,
  }

  state = { open: false }

  selectText = () => this.textarea.select();

  showExportData = () => {
    track('Click export data');
    this.setState({ open: true });
  };

  render() {
    const { data } = this.props;
    const { open } = this.state;

    if (!open) {
      return <MainButton onClick={this.showExportData}>Vis data</MainButton>;
    }

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
        <MainButton>Ta med dataen til altinn</MainButton>
      </div>
    );
  }
}

const mapStateToProps = (state, { exporter }) => ({
  data: exporter(getData(state)),
});

export default connect(mapStateToProps)(ExportData);
