import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import { resetData } from '../state/actions';
import { SecondaryButton as StyledNavReset } from '../primitives/Button';

function NavReset(props) {
  return (
    <StyledNavReset
      onClick={() => {
        /* eslint no-alert: 0 */
        if (confirm('Sikker på at du vil slette alle svarene dine?')) {
          props.resetData();
        }
      }}
    >
      Start på nytt
    </StyledNavReset>
  );
}

NavReset.propTypes = {
  resetData: PropTypes.func.isRequired,
};

export default connect(null, dispatch =>
  bindActionCreators({ resetData }, dispatch),
)(NavReset);
