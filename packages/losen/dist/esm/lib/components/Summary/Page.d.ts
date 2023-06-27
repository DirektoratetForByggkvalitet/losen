import React from "react";
import { RenderableNode, RenderableResult } from "../..";
type Props = {
    children?: RenderableNode[];
    error?: boolean;
    goToPage: () => void;
    heading?: RenderableResult["heading"];
};
export default function PageSummary({ children, error, goToPage, heading }: Props): React.JSX.Element;
export {};
