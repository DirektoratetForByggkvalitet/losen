import React from "react";
import { RenderableNode } from "../..";
import { getErrorPages } from "../../utils/selectors";
type Props = {
    errorPages: ReturnType<typeof getErrorPages>;
    pages: RenderableNode[];
    setPage: (page: string) => void;
};
export default function Summary({ errorPages, setPage, pages }: Props): React.JSX.Element;
export {};
