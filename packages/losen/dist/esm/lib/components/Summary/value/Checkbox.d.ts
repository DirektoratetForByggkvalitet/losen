import PropTypes from "prop-types";
import React from "react";
declare function Sum({ node, node: { allMandatory, currentValue, errors } }: any): React.JSX.Element;
declare namespace Sum {
    var propTypes: {
        node: PropTypes.Validator<object>;
    };
}
declare const ConnectedSum: import("react-redux").ConnectedComponent<typeof Sum, {
    node: object;
    context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
} | {
    node: object;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
export default ConnectedSum;
