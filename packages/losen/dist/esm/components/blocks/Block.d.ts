import PropTypes from "prop-types";
export declare function PureBlock(props: any): import("react/jsx-runtime").JSX.Element;
export declare namespace PureBlock {
    var propTypes: {
        children: PropTypes.Requireable<(object | null | undefined)[]>;
        currentValue: PropTypes.Requireable<any>;
        debug: PropTypes.Validator<boolean>;
        disabled: PropTypes.Requireable<boolean>;
        errorDescription: PropTypes.Requireable<string>;
        errors: PropTypes.Requireable<PropTypes.InferProps<{
            disabled: PropTypes.Requireable<any[]>;
            validation: PropTypes.Requireable<object>;
            required: PropTypes.Requireable<boolean>;
        }>>;
        grouped: PropTypes.Requireable<boolean>;
        heading: PropTypes.Requireable<string>;
        id: PropTypes.Requireable<string>;
        image: PropTypes.Requireable<object>;
        property: PropTypes.Requireable<string>;
        simple: PropTypes.Requireable<boolean>;
        text: PropTypes.Requireable<string>;
        type: PropTypes.Validator<string>;
        validator: PropTypes.Requireable<NonNullable<boolean | PropTypes.InferProps<{
            error: PropTypes.Validator<string>;
            pattern: PropTypes.Validator<string>;
        }> | null | undefined>>;
        errorPages: PropTypes.Requireable<any[]>;
        details: PropTypes.Requireable<string>;
        summary: PropTypes.Requireable<string>;
        setPage: PropTypes.Requireable<(...args: any[]) => any>;
        pages: PropTypes.Requireable<any[]>;
    };
    var defaultProps: {
        children: never[];
        currentValue: undefined;
        details: string;
        disabled: boolean;
        errorDescription: null;
        errorPages: never[];
        errors: {};
        grouped: boolean;
        heading: string;
        id: null;
        image: {};
        pages: never[];
        property: null;
        setPage: () => void;
        simple: boolean;
        summary: string;
        text: string;
        validator: boolean;
    };
}
declare const ConnectedBlock: import("react-redux").ConnectedComponent<typeof PureBlock, {
    [x: string]: any;
}>;
export default ConnectedBlock;
//# sourceMappingURL=Block.d.ts.map