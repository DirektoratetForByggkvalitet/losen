import React from 'react';
import { NavItem as StyledNavItem } from "../primitives";
import CheckIcon from './graphics/CheckIcon';

type Props = {
  active?: boolean
  done?: boolean
  errors?: boolean
  heading?: string
  id: string
  index: number
  setPage: (page: string, property?: string) => void
}

export default function NavItem({ active = false, done = false, errors = false, heading = "TITLE MISSING", id, index, setPage }: Props) {
  return (
    <StyledNavItem
      $active={active}
      $done={done}
      $errors={errors}
      href="#"
      onClick={(e) => {
        e.preventDefault();
        setPage(id);
      }}
    >
      <span>{index}</span>
      <p>
        {heading}
      </p>
      {(done && !active) && <CheckIcon />}
    </StyledNavItem>
  );
}
