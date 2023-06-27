import React from "react";
type Props = {
    hasNext?: boolean;
    hasPrevious?: boolean;
    nextPage?: () => void;
    previousPage?: () => void;
    nextPageIsResult: boolean;
};
export default function Navigation({ nextPageIsResult, hasNext, hasPrevious, nextPage, previousPage, }: Props): React.JSX.Element;
export {};
