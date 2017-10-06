import React from 'react';
import PropTypes from 'prop-types';
import StyledNavItem from '../primitives/NavItem';

export default function NavItem({ setPage, id, done, heading, active, index }) {
  return (
    <StyledNavItem
      active={active}
      done={done}
      onClick={() => setPage(id)}
      tabIndex="0"
    >
      <div>{index}</div>
      <p>
        {heading}
        <span>Endre svar</span>
      </p>
    </StyledNavItem>
  );
}

NavItem.defaultProps = {
  heading: 'TITLE MISSING',
  done: false,
  active: false,
};

NavItem.propTypes = {
  active: PropTypes.bool,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  heading: PropTypes.string,
  done: PropTypes.bool,
  setPage: PropTypes.func.isRequired,
};
