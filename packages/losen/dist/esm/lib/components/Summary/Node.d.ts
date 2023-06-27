import React from "react";
import PropTypes from "prop-types";
import { RenderableNode } from "../..";
type Props = {
    node: RenderableNode;
    value?: any;
};
declare function NodeSummary({ node }: Props): React.JSX.Element | null;
declare namespace NodeSummary {
    var propTypes: {
        node: PropTypes.Validator<NonNullable<PropTypes.InferProps<{
            children: PropTypes.Requireable<(object | null | undefined)[]>;
            currentValue: PropTypes.Requireable<any>;
            errorDescription: PropTypes.Requireable<string>;
            errors: PropTypes.Requireable<object>;
            heading: PropTypes.Requireable<string>;
            property: PropTypes.Requireable<string>;
            type: PropTypes.Validator<string>;
            text: PropTypes.Requireable<string>;
        }>>>;
    };
    var defaultProps: {
        children: never[];
        currentValue: undefined;
        errorDescription: string;
        errors: {};
        heading: string;
        property: string;
    };
}
export default NodeSummary;
