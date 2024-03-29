import React from 'react';
import { MainButton as StyledNavResult } from "../primitives/Button";

type Props = {
  setPage: (id: string) => void;
  id: string;
  active?: boolean;
}

export default function NavResult({ setPage, id, active = false }: Props) {
  return (
    <StyledNavResult
      type="button"
      data-id={id}
      onClick={() => setPage(id)}
    >
      Vis resultat
    </StyledNavResult>
  );
}