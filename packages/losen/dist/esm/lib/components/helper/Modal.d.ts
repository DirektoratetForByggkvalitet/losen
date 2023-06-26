import React from "react";
type Props = {
    data: any;
    resetData: () => void;
    showIntro: () => void;
};
declare function Modal(props: Props): React.JSX.Element;
declare const _default: import("react-redux").ConnectedComponent<typeof Modal, {
    showIntro: () => void;
    context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
export default _default;
