import { useState } from 'react';

import NavItem from "./NavItem";
import NavReset from "./NavReset";
import NavResult from "./NavResult";
import LanguageSelector from "./LanguageSelector";

import { ToggleButton, Title, Grid } from "losen/primitives";

type Props = {
  heading?: string,
  page?: string,
  setPage: (page: string, property?: string) => void,
  tableOfContents: any[]
  showIntro: () => void,
  translations: Record<string, {}>
}

export default function Nav({ heading = "Missing page heading", page: currentPage, setPage, tableOfContents, showIntro, translations }: Props) {
  const [tocExpanded, setTocExpanded] = useState(true);

  const toggleToc = () => setTocExpanded(!tocExpanded);
  const currentIndex = tableOfContents.findIndex(page => page.id === currentPage);

  return (
    <div>
      <ToggleButton type="button" onClick={toggleToc}>
        {tocExpanded ? `${currentIndex + 1} av ${tableOfContents.length} steg` : "Skjul all steg"}
      </ToggleButton>

      <Grid.Nav tocExpanded={tocExpanded}>
        <Grid.NavSection large>
          <Title onClick={showIntro}>{heading}</Title>
        </Grid.NavSection>
        <Grid.NavSection>
          <Grid.NavList>
            {tableOfContents.filter(page => page.type !== "Result").map((page, index) =>
              <li>
                <NavItem
                  key={page.id}
                  id={page.id}
                  index={index + 1}
                  heading={page.heading}
                  setPage={setPage}
                  done={page.completed}
                  active={page.id === currentPage}
                />
              </li>
            )}
          </Grid.NavList>
        </Grid.NavSection>
        <Grid.NavSection large>
          {tableOfContents.filter(page => page.type === "Result").map((page) =>
            <NavResult
              key={page.id}
              id={page.id}
              setPage={setPage}
              // TODO: These 👇 were passed, but wasn't being received by NavResult..
              // heading={page.heading}
              // done={!page.errors}
              active={page.id === currentPage}
            />
          )}
          <NavReset showIntro={showIntro} />
        </Grid.NavSection>
        <LanguageSelector translations={translations} />
      </Grid.Nav>
    </div>
  )
}