import { NavItem as StyledNavItem } from "losen/primitives";

type Props = {
  active?: boolean
  done?: boolean
  heading?: string
  id: string
  index: number
  setPage: (page: string, property?: string) => void
}

export default function NavItem({ active = false, done = false, heading = "TITLE MISSING", id, index, setPage }: Props) {
  return (
    <StyledNavItem
      active={active}
      done={done}
      href="#"
      onClick={(e: MouseEvent) => {
        e.preventDefault();
        setPage(id);
      }}
    >
      <div>{index}</div>
      <p>
        {heading}
        {active ? "" : <span>Endre svar</span>}
      </p>
    </StyledNavItem>
  );
}
