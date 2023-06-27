import React from 'react';
import PageSummary from "./Page";
import hasSoftError from "losen/utils/has-soft-error";
import { RenderableNode } from "../..";
import { hasProperty } from "../../utils/is-of-type";
import { getErrorPages } from "../../utils/selectors";

type Props = {
  errorPages: ReturnType<typeof getErrorPages>,
  pages: RenderableNode[],
  setPage: (page: string) => void,
}

export default function Summary({ errorPages, setPage, pages = [] }: Props) {
  return (
    <>
      {pages
        .filter(({ type }) => type === "Page")
        .map((page) => (
          hasProperty(page, 'id') ? <PageSummary
            key={page.id}
            error={
              !!errorPages.find(({ id }) => page.id === id) ||
              hasSoftError(page)
            }
            goToPage={() => setPage(page.id)}
            {...page}
          /> : null
        ))}
    </>
  );
}