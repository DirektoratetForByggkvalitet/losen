import React, { useState } from "react";

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

  return (
    <div>
      <ToggleButton type="button" onClick={toggleToc}>
        {tocExpanded ? "Vis" : "Skjul"} alle steg
      </ToggleButton>

      <Grid.Nav tocExpanded={tocExpanded}>
        <Title onClick={showIntro}>{heading}</Title>
        {tableOfContents.map((page, index) =>
          page.type === "Result" ? (
            <NavResult
              key={page.id}
              id={page.id}
              setPage={setPage}
              // TODO: These 👇 were passed, but wasn't being received by NavResult..
              // heading={page.heading}
              // done={!page.errors}
              active={page.id === currentPage}
            />
          ) : (
            <NavItem
              key={page.id}
              id={page.id}
              index={index + 1}
              heading={page.heading}
              setPage={setPage}
              done={!page.errors}
              active={page.id === currentPage}
            />
          )
        )}
        <NavReset showIntro={showIntro} />
        <LanguageSelector translations={translations} />
      </Grid.Nav>
    </div>
  )
}