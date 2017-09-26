import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Textarea } from '../primitives/Input';
import { getData } from '../utils/selectors';

function ExportData({ data }) {
  const json = JSON.stringify(data, null, 2);
  const lines = json.split(/\n/).length;

  return <Textarea rows={lines}>{json}</Textarea>;
}

ExportData.propTypes = {
  data: PropTypes.any,
};

ExportData.defaultProps = {
  data: null,
};

const mapStateToProps = (state, { exporter }) => ({
  data: exporter(getData(state)),
});

export default connect(mapStateToProps)(ExportData);
