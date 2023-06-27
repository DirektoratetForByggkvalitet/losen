/// <reference types="react" />
type Props = {
    resetData: () => void;
    showIntro: () => void;
};
declare function NavReset(props: Props): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react-redux").ConnectedComponent<typeof NavReset, {
    showIntro: () => void;
    context?: import("react").Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
export default _default;
//# sourceMappingURL=NavReset.d.ts.map