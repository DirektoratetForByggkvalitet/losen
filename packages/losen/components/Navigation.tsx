import React from 'react';
import { Button }  from "primitives";

type Props = {
  hasNext?: boolean,
  hasPrevious?: boolean,
  nextPage?: () => void,
  previousPage?: () => void,
  nextPageIsResult: boolean,
}

export default function Navigation({
  nextPageIsResult,
  hasNext = false,
  nextPage = () => { },
}: Props) {
  return (
    <>
      {hasNext ? (
        <Button.NavButton type="button" next onClick={nextPage}>
          {nextPageIsResult ? "Vis resultat" : "Neste"}
        </Button.NavButton>
      ) : null}
    </>
  );
}