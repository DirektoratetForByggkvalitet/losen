import { RenderableNode, RenderableResult } from "../..";
type Props = {
    children?: RenderableNode[];
    error?: boolean;
    goToPage: () => void;
    heading?: RenderableResult["heading"];
};
export default function PageSummary({ children, error, goToPage, heading }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Page.d.ts.map