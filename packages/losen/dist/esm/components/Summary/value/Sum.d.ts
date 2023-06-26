import React from "react";
import { RenderableNode, State } from "../../..";
type Props = {
    node: RenderableNode;
    data: State;
};
declare function Sum({ node, data }: Props): import("react/jsx-runtime").JSX.Element | null;
declare const ConnectedSum: import("react-redux").ConnectedComponent<typeof Sum, {
    node: RenderableNode;
    context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
export default ConnectedSum;
//# sourceMappingURL=Sum.d.ts.map