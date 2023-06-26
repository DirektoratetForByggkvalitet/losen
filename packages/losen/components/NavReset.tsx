import React from 'react'
import { connect } from 'react-redux';
import { resetData } from '../state/actions';
import { SecondaryButton as StyledNavReset } from '../primitives/Button';

type Props = {
  resetData: () => void;
  showIntro: () => void;
}

function NavReset(props: Props) {
  return (
    <StyledNavReset
      type="button"
      onClick={() => {
        /* eslint no-alert: 0 */
        if (confirm('Sikker på at du vil slette alle svarene dine?')) {
          props.resetData();
          props.showIntro();
        }
      }}
    >
      Start på nytt
    </StyledNavReset>
  );
}

export default connect(null, { resetData })(NavReset);
