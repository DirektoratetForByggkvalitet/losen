import { Button, Grid } from "losen/primitives";

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
  hasPrevious = false,
  nextPage = () => { },
  previousPage = () => { },
}: Props) {
  return (
    <Grid.Nav>
      {hasPrevious ? (
        <Button.NavButton type="button" onClick={previousPage}>
          Forrige
        </Button.NavButton>
      ) : null}
      {hasNext ? (
        <Button.NavButton type="button" next onClick={nextPage}>
          {nextPageIsResult ? "Vis resultat" : "Neste"}
        </Button.NavButton>
      ) : null}
    </Grid.Nav>
  );
}