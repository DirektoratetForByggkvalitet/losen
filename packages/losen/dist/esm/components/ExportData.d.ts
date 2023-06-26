import React from "react";
type Props = {
    data?: any;
};
declare function ExportData({ data }: Props): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react-redux").ConnectedComponent<typeof ExportData, {
    exporter: (data: any) => string;
    context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
export default _default;
//# sourceMappingURL=ExportData.d.ts.map