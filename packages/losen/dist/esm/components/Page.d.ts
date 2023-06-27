import { RenderableNode } from "..";
type Props = {
    children: RenderableNode[];
    debug?: boolean;
    details?: string;
    firstPage: boolean;
    lastPage: boolean;
    heading?: string;
    lead?: string;
    nextPage: () => void;
    pageid: string;
    nextPageIsResult: boolean;
    previousPage: () => void;
    summary?: string;
};
export default function Page({ children, debug, details, firstPage, lastPage, heading, lead, nextPage, nextPageIsResult, pageid, previousPage, summary, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Page.d.ts.map