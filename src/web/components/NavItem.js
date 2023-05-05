import PropTypes from 'prop-types';
import React from 'react';

import StyledNavItem from '../primitives/NavItem';

export default function NavItem({ active, done, heading, id, index, setPage }) {
  return (
    <StyledNavItem
      active={active}
      done={done}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setPage(id);
      }}
    >
      <div>{index}</div>
      <p>
        {heading}
        {active ? '' : <span>Endre svar</span>}
      </p>
    </StyledNavItem>
  );
}

NavItem.defaultProps = {
  active: false,
  done: false,
  heading: 'TITLE MISSING',
};

NavItem.propTypes = {
  active: PropTypes.bool,
  done: PropTypes.bool,
  heading: PropTypes.string,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
