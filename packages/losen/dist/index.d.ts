import { Action as Action$1 } from 'losen/state/actions';
import { WizardDefinition as WizardDefinition$1, State as State$1, RenderableNode as RenderableNode$1 } from 'losen';
import * as react from 'react';
import * as react_redux from 'react-redux';
import * as redux from 'redux';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { Expression as Expression$1, ValidationResult as ValidationResult$1, ValidationError as ValidationError$1 } from 'losen/utils/dsl';

declare const SET_DATA: "SET_DATA";
declare const RESET_DATA: "RESET_DATA";
declare const SHOW_RESET_MODAL: "SHOW_RESET_MODAL";
declare function setData(key: string, value: any): {
    type: "SET_DATA";
    payload: {
        key: string;
        value: any;
    };
};
declare function resetData(): {
    type: "RESET_DATA";
};
declare function resetModal(show?: boolean): {
    type: "SHOW_RESET_MODAL";
    payload: {
        show: boolean;
    };
};
declare function setLanguage(language: string): {
    type: "SET_DATA";
    payload: {
        key: string;
        value: any;
    };
};
type Action = ReturnType<typeof setData> | ReturnType<typeof resetData> | ReturnType<typeof resetModal>;

type actions_Action = Action;
declare const actions_RESET_DATA: typeof RESET_DATA;
declare const actions_SET_DATA: typeof SET_DATA;
declare const actions_SHOW_RESET_MODAL: typeof SHOW_RESET_MODAL;
declare const actions_resetData: typeof resetData;
declare const actions_resetModal: typeof resetModal;
declare const actions_setData: typeof setData;
declare const actions_setLanguage: typeof setLanguage;
declare namespace actions {
  export {
    actions_Action as Action,
    actions_RESET_DATA as RESET_DATA,
    actions_SET_DATA as SET_DATA,
    actions_SHOW_RESET_MODAL as SHOW_RESET_MODAL,
    actions_resetData as resetData,
    actions_resetModal as resetModal,
    actions_setData as setData,
    actions_setLanguage as setLanguage,
  };
}

declare function applyComputed(wizard: WizardDefinition$1, state: State$1): {
    $computed: {};
};
declare const _default$1: (wizard: WizardDefinition$1) => (state: {
    $computed: {};
} | undefined, action: Action$1) => {
    $computed: {};
} | {
    $showResetModal: boolean;
    $computed: {};
};

declare const NAME = "@WIZARD_STATE";

declare const index$3_NAME: typeof NAME;
declare const index$3_actions: typeof actions;
declare const index$3_applyComputed: typeof applyComputed;
declare namespace index$3 {
  export {
    index$3_NAME as NAME,
    index$3_actions as actions,
    index$3_applyComputed as applyComputed,
    _default$1 as reducer,
  };
}

type Translations = Record<string, {
    key: string;
    name: string;
    tags: Record<string, {
        heading: string;
        description?: string;
        image?: {
            large: string;
        };
    }>;
    meta?: {
        title?: "Min vägvisare";
    };
}>;

declare const styles: {
    font: {
        headline: string;
        body: string;
    };
    color2: {
        pageBackground: string;
        sectionBackground: string;
        textHeading: string;
        textDark: string;
        textWhite: string;
        link: string;
        visitedLink: string;
        outline: string;
        focus: string;
        primary: string;
        primaryLight: string;
        primaryXLight: string;
        secondary: string;
        secondaryLight: string;
        secondaryXLight: string;
        error: string;
        errorLight: string;
        errorXLight: string;
        positive: string;
        positiveLight: string;
        positiveXLight: string;
        negative: string;
        negativeLight: string;
        negativeXLight: string;
    };
    borderRadius: {
        small: string;
        large: string;
    };
    padding: {
        xxSmall: string;
        xSmall: string;
        small: string;
        medium: string;
        large: string;
        xLarge: string;
    };
    size: {
        imageWidth: string;
        pageWidth: string;
        blockWidth: string;
        navWidth: string;
        headerHeight: string;
        mobileContentWidth: string;
    };
    iconSize: {
        small: string;
        medium: string;
    };
    easing: {
        easeOut: string;
    };
    text: {
        body: {
            fontSize: string;
            fontWeight: string;
            boldWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        lead: {
            fontSize: string;
            fontWeight: string;
            boldWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        h1: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        h2: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        h3: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
        subHeading: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            textTransform: string;
        };
        caption: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
            fontStyle: string;
        };
        label: {
            fontSize: string;
            fontWeight: string;
            lineHeight: string;
            letterSpacing: string;
        };
    };
};
type StylesProps = {
    styles?: Partial<typeof styles>;
};

type Props$1 = {
    data?: State$1;
    debug?: boolean;
    warningBeforeUnload?: boolean;
    exports?: Record<string, (state: State$1) => any>;
    schema: RenderableNode$1[];
    setData: typeof setData;
    showIntro?: () => void;
    styles?: StylesProps['styles'];
    title: string;
    tableOfContents: Array<Object>;
    translations?: Record<string, {
        key: string;
        name: string;
        tags?: {
            description?: string;
            heading?: string;
            image?: {
                small: string;
                large: string;
            };
            tooltips?: string;
        };
    }>;
    wizard: WizardDefinition$1;
    showResetModal?: boolean;
};
declare function Wizard$1({ data, debug, warningBeforeUnload, exports, showIntro, styles, translations, showResetModal: showResetModalDefault, schema, setData, tableOfContents, title, wizard }: Props$1): react_jsx_runtime.JSX.Element;
declare const _default: react_redux.ConnectedComponent<typeof Wizard$1, {
    styles?: Partial<{
        font: {
            headline: string;
            body: string;
        };
        color2: {
            pageBackground: string;
            sectionBackground: string;
            textHeading: string;
            textDark: string;
            textWhite: string;
            link: string;
            visitedLink: string;
            outline: string;
            focus: string;
            primary: string;
            primaryLight: string;
            primaryXLight: string;
            secondary: string;
            secondaryLight: string;
            secondaryXLight: string;
            error: string;
            errorLight: string;
            errorXLight: string;
            positive: string;
            positiveLight: string;
            positiveXLight: string;
            negative: string;
            negativeLight: string;
            negativeXLight: string;
        };
        borderRadius: {
            small: string;
            large: string;
        };
        padding: {
            xxSmall: string;
            xSmall: string;
            small: string;
            medium: string;
            large: string;
            xLarge: string;
        };
        size: {
            imageWidth: string;
            pageWidth: string;
            blockWidth: string;
            navWidth: string;
            headerHeight: string;
            mobileContentWidth: string;
        };
        iconSize: {
            small: string;
            medium: string;
        };
        easing: {
            easeOut: string;
        };
        text: {
            body: {
                fontSize: string;
                fontWeight: string;
                boldWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            lead: {
                fontSize: string;
                fontWeight: string;
                boldWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h1: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h2: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            h3: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
            subHeading: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                textTransform: string;
            };
            caption: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
                fontStyle: string;
            };
            label: {
                fontSize: string;
                fontWeight: string;
                lineHeight: string;
                letterSpacing: string;
            };
        };
    }> | undefined;
    showIntro?: (() => void) | undefined;
    translations?: (Record<string, {
        key: string;
        name: string;
        tags?: {
            description?: string | undefined;
            heading?: string | undefined;
            image?: {
                small: string;
                large: string;
            } | undefined;
            tooltips?: string | undefined;
        } | undefined;
    }> & Translations) | undefined;
    exports?: Record<string, (state: State$1) => any> | undefined;
    wizard: WizardDefinition$1;
    warningBeforeUnload?: boolean | undefined;
    showResetModal?: boolean | undefined;
    context?: react.Context<react_redux.ReactReduxContextValue<any, redux.AnyAction>> | undefined;
    store?: redux.Store<any, redux.AnyAction> | undefined;
}>;

type Props = {
    children: React.ReactNode;
    styles?: StylesProps['styles'];
};
declare function StyleProvider({ children, styles }: Props): react_jsx_runtime.JSX.Element;

declare global {
    interface Window {
        _paq?: any[];
    }
}
declare function track(wizardName: string, id: string, title?: string): void;
declare function trackEvent(action: string, name?: string): void;

type ComplexExpression = {
    errorMessage?: string[];
    type: "and" | "or";
    clauses: Expression[];
};
type SimpleExpression = {
    field: string;
    operator: "gt" | "lt" | "gte" | "lte" | "eq" | "neq" | "between" | "is" | "not" | "isnot" | "required";
    value?: any | [number, number];
    type?: undefined;
    errorMessage?: string[];
};
type Expression = SimpleExpression | ComplexExpression;
type GreaterThan = {};
type ValidationError = Array<any>;
type ValidationResult = {
    valid?: boolean;
    operator?: "and" | "or";
    errors: ValidationResult | Array<ValidationError | ValidationResult>;
};
type Validator = (state: State) => ValidationResult;
declare function getValue(value: {
    fields: string[];
    field?: undefined;
} | {
    field: string;
    fields?: undefined;
} | number | string, state: State): any;
declare function buildGt({ field, value, errorMessage, }: SimpleExpression): Validator;
declare function buildLt({ field, value, errorMessage, }: SimpleExpression): Validator;
declare function buildGte({ field, value, errorMessage, }: SimpleExpression): Validator;
declare function buildLte({ field, value, errorMessage, }: SimpleExpression): Validator;
declare function buildEq({ field, value, errorMessage, }: SimpleExpression): Validator;
declare function buildNeq({ field, value, errorMessage, }: SimpleExpression): Validator;
declare function buildBetween({ field, value, errorMessage, }: SimpleExpression): Validator;
declare function buildRequired({ field, errorMessage, }: {
    field: string;
    errorMessage?: string[];
}): Validator;
declare function buildNot({ field, errorMessage, }: {
    field: string;
    errorMessage?: string[];
}): Validator;
declare function buildIs({ field, errorMessage, }: {
    field: string;
    errorMessage?: string[];
}): Validator;
declare function buildValidatorForSimpleExpression(expression: SimpleExpression): Validator;
declare function buildValidatorForComplexExpression(expression: ComplexExpression): Validator;
declare function buildValidatorFunction(expression: Expression): Validator;
/**
 * Parse a structured expression and return a function that expects
 * to be called with the current state data for validation
 *
 * @param {*} expression
 */
declare function parseExpression(expression: Expression, topLevel?: boolean): Validator;

type index$2_ComplexExpression = ComplexExpression;
type index$2_Expression = Expression;
type index$2_GreaterThan = GreaterThan;
type index$2_SimpleExpression = SimpleExpression;
type index$2_ValidationError = ValidationError;
type index$2_ValidationResult = ValidationResult;
declare const index$2_buildBetween: typeof buildBetween;
declare const index$2_buildEq: typeof buildEq;
declare const index$2_buildGt: typeof buildGt;
declare const index$2_buildGte: typeof buildGte;
declare const index$2_buildIs: typeof buildIs;
declare const index$2_buildLt: typeof buildLt;
declare const index$2_buildLte: typeof buildLte;
declare const index$2_buildNeq: typeof buildNeq;
declare const index$2_buildNot: typeof buildNot;
declare const index$2_buildRequired: typeof buildRequired;
declare const index$2_buildValidatorForComplexExpression: typeof buildValidatorForComplexExpression;
declare const index$2_buildValidatorForSimpleExpression: typeof buildValidatorForSimpleExpression;
declare const index$2_buildValidatorFunction: typeof buildValidatorFunction;
declare const index$2_getValue: typeof getValue;
declare const index$2_parseExpression: typeof parseExpression;
declare namespace index$2 {
  export {
    index$2_ComplexExpression as ComplexExpression,
    index$2_Expression as Expression,
    index$2_GreaterThan as GreaterThan,
    index$2_SimpleExpression as SimpleExpression,
    index$2_ValidationError as ValidationError,
    index$2_ValidationResult as ValidationResult,
    index$2_buildBetween as buildBetween,
    index$2_buildEq as buildEq,
    index$2_buildGt as buildGt,
    index$2_buildGte as buildGte,
    index$2_buildIs as buildIs,
    index$2_buildLt as buildLt,
    index$2_buildLte as buildLte,
    index$2_buildNeq as buildNeq,
    index$2_buildNot as buildNot,
    index$2_buildRequired as buildRequired,
    index$2_buildValidatorForComplexExpression as buildValidatorForComplexExpression,
    index$2_buildValidatorForSimpleExpression as buildValidatorForSimpleExpression,
    index$2_buildValidatorFunction as buildValidatorFunction,
    parseExpression as default,
    index$2_getValue as getValue,
    index$2_parseExpression as parseExpression,
  };
}

declare const NavItem: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const SpecificBlock: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;
declare const TextBlock: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const Block_SpecificBlock: typeof SpecificBlock;
declare const Block_TextBlock: typeof TextBlock;
declare namespace Block {
  export {
    Block_SpecificBlock as SpecificBlock,
    Block_TextBlock as TextBlock,
  };
}

declare const MainButton: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;
declare const SecondaryButton: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;
declare const SmallButton: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;
declare const NavButton: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const Button_MainButton: typeof MainButton;
declare const Button_NavButton: typeof NavButton;
declare const Button_SecondaryButton: typeof SecondaryButton;
declare const Button_SmallButton: typeof SmallButton;
declare namespace Button {
  export {
    Button_MainButton as MainButton,
    Button_NavButton as NavButton,
    Button_SecondaryButton as SecondaryButton,
    Button_SmallButton as SmallButton,
  };
}

declare const ErrorMessage: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const Errors_ErrorMessage: typeof ErrorMessage;
declare namespace Errors {
  export {
    Errors_ErrorMessage as ErrorMessage,
  };
}

declare const Figure: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare namespace Figure$1 {
  export {
    Figure as default,
  };
}

declare const Nav: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const NavList: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const NavSection: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const Blocks: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const Grid: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const Main: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const Navigation: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const Simple: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const FocusWrapper: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const index$1_Blocks: typeof Blocks;
declare const index$1_FocusWrapper: typeof FocusWrapper;
declare const index$1_Grid: typeof Grid;
declare const index$1_Main: typeof Main;
declare const index$1_Nav: typeof Nav;
declare const index$1_NavList: typeof NavList;
declare const index$1_NavSection: typeof NavSection;
declare const index$1_Navigation: typeof Navigation;
declare const index$1_Simple: typeof Simple;
declare namespace index$1 {
  export {
    index$1_Blocks as Blocks,
    index$1_FocusWrapper as FocusWrapper,
    index$1_Grid as Grid,
    index$1_Main as Main,
    index$1_Nav as Nav,
    index$1_NavList as NavList,
    index$1_NavSection as NavSection,
    index$1_Navigation as Navigation,
    index$1_Simple as Simple,
  };
}

declare const H1: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;
declare const H2: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;
declare const H3: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;
declare const H4: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const Heading$1_H1: typeof H1;
declare const Heading$1_H2: typeof H2;
declare const Heading$1_H3: typeof H3;
declare const Heading$1_H4: typeof H4;
declare namespace Heading$1 {
  export {
    Heading$1_H1 as H1,
    Heading$1_H2 as H2,
    Heading$1_H3 as H3,
    Heading$1_H4 as H4,
  };
}

declare const P: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;
declare const Lead: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const Paragraphs_Lead: typeof Lead;
declare const Paragraphs_P: typeof P;
declare namespace Paragraphs {
  export {
    Paragraphs_Lead as Lead,
    Paragraphs_P as P,
  };
}

declare const Checkbox$1: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;
declare const CheckboxResultDisplay: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;
declare const Radio$1: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;
declare const NumberInput: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;
declare const TextInput: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;
declare const Textarea$1: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;
declare const SelectWrapper: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const Input$1_CheckboxResultDisplay: typeof CheckboxResultDisplay;
declare const Input$1_NumberInput: typeof NumberInput;
declare const Input$1_SelectWrapper: typeof SelectWrapper;
declare const Input$1_TextInput: typeof TextInput;
declare namespace Input$1 {
  export {
    Checkbox$1 as Checkbox,
    Input$1_CheckboxResultDisplay as CheckboxResultDisplay,
    Input$1_NumberInput as NumberInput,
    Radio$1 as Radio,
    Input$1_SelectWrapper as SelectWrapper,
    Input$1_TextInput as TextInput,
    Textarea$1 as Textarea,
  };
}

declare const Label: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;
declare const SRLabel: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const Label$1_Label: typeof Label;
declare const Label$1_SRLabel: typeof SRLabel;
declare namespace Label$1 {
  export {
    Label$1_Label as Label,
    Label$1_SRLabel as SRLabel,
  };
}

declare const Title: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const ToggleButton: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const Export: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const Wizard: react.ForwardRefExoticComponent<Omit<{
    [x: string]: any;
    [x: number]: any;
    [x: symbol]: any;
} & {
    theme?: any;
} & {
    as?: string | react.ComponentType<any> | undefined;
    forwardedAs?: string | react.ComponentType<any> | undefined;
}, "ref"> & react.RefAttributes<unknown>>;

declare const index_Block: typeof Block;
declare const index_Button: typeof Button;
declare const index_Errors: typeof Errors;
declare const index_Export: typeof Export;
declare const index_NavItem: typeof NavItem;
declare const index_Paragraphs: typeof Paragraphs;
declare const index_Title: typeof Title;
declare const index_ToggleButton: typeof ToggleButton;
declare const index_Wizard: typeof Wizard;
declare namespace index {
  export {
    index_Block as Block,
    index_Button as Button,
    index_Errors as Errors,
    index_Export as Export,
    Figure$1 as Figure,
    index$1 as Grid,
    Heading$1 as Heading,
    Input$1 as Input,
    Label$1 as Label,
    index_NavItem as NavItem,
    index_Paragraphs as Paragraphs,
    index_Title as Title,
    index_ToggleButton as ToggleButton,
    index_Wizard as Wizard,
  };
}

type NodeTitles = Record<string, string>;
type Metadata = {
    title: string;
    name: string;
    footer?: string;
    pdfServiceUrl?: string;
    localStorageKey?: string;
};
/**
 * The known node types
 */
type NodeType = "Page" | "Result" | "Error" | "ErrorOk" | "Group" | "Result" | "Answer" | "Image" | "Text" | "Branch" | "Reference" | "Checkbox" | "Radio" | "Select" | "Input" | "Number" | "Textarea" | "Cell" | "Heading" | "Table" | "FetchOrg" | "Evaluation" | "Information" | "Signature" | "Sum";
type ImageSrc = {
    url: string;
    alt: string;
    text?: string;
};
/**
 * Properties common to all nodes that support visibility filters by use of show/hide expressions
 */
type VisibilityFilter = {
    show?: Expression$1;
    hide?: Expression$1;
    /**
     * @deprecated Use `hide` instead
     */
    hidden?: Expression$1;
};
type CommonOptions = {
    heading: string;
    text?: string;
    image?: ImageSrc;
};
type NodeBase<T extends NodeType, I extends boolean = true> = {
    type: T;
} & (I extends true ? {
    id: string;
} : {}) & VisibilityFilter;
type InputNodeBase<T extends NodeType> = NodeBase<T> & CommonOptions & {
    id: string;
    property: string;
};
type Answer = NodeBase<"Answer"> & {
    heading: string;
    text?: string;
    value: any;
    disabled?: Expression$1;
    messages?: Array<{
        message: string;
        warning?: boolean;
        hide?: Expression$1;
        show?: Expression$1;
        hidden?: Expression$1;
    }>;
    image?: ImageSrc;
};
type Page = NodeBase<"Page"> & {
    type: "Page";
    heading: string;
    lead?: string;
    children: Node[];
};
type Result = NodeBase<"Result"> & {
    type: "Result";
    children?: Node[];
    exporter?: string;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    };
    lead?: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    };
};
type Error = NodeBase<"Error"> & {
    heading: string;
    lead?: string;
    children: Node[];
};
type ErrorOk = NodeBase<"ErrorOk"> & {
    heading: string;
    lead?: string;
    children: Node[];
};
type BranchNode = {
    test: Expression$1;
    children: Node[];
};
type Branch = NodeBase<"Branch"> & {
    branches: BranchNode[];
};
type Checkbox = InputNodeBase<"Checkbox"> & {
    allMandatory?: boolean;
    disabled?: Expression$1;
    optional?: boolean;
    options: Array<Answer | Reference>;
    grid?: boolean;
    /**
     * List of options to clear when the value of this checkbox group changes
     */
    update?: string[];
};
type Radio = InputNodeBase<"Radio"> & {
    disabled?: Expression$1;
    options: Array<Answer | Reference>;
    grid?: boolean;
    /**
     * List of options to clear when the value of this radio group changes
     */
    clear?: string[];
};
type Select = InputNodeBase<"Select"> & {
    options: Array<Answer | Reference>;
    autocomplete?: string;
    defaultOption?: string;
};
type Group = NodeBase<"Group"> & VisibilityFilter & {
    heading?: string;
    text?: string;
    children: Node[];
};
type WithValidator = {
    validator?: ({
        test?: undefined;
        pattern: string;
        object?: string;
    } | {
        test: Expression$1;
    }) & {
        error: string;
    };
};
type Text = NodeBase<"Text"> & {
    heading?: string;
    text?: string;
    warning?: boolean;
    /**
     * Show only when printing
     */
    printonly?: boolean;
    /**
     * Hide when printing
     */
    printhide?: boolean;
};
type Information = Omit<Text, "type"> & {
    type: "Information";
};
type Textarea = InputNodeBase<"Textarea"> & WithValidator & {
    information?: string;
    placeholder?: string;
    optional?: boolean;
    autocomplete?: string;
};
type Input = InputNodeBase<"Input"> & WithValidator & {
    placeholder?: string;
    optional?: boolean;
    disabled?: Expression$1;
    autocomplete?: string;
    inputType?: string;
};
type Number = InputNodeBase<"Number"> & WithValidator & {
    text?: string;
    placeholder?: string;
    disabled?: Expression$1;
    optional?: boolean;
    minimum?: number;
    maximum?: number;
    step?: number;
    autocomplete?: string;
    unit?: string;
};
type FetchOrg = InputNodeBase<"FetchOrg"> & WithValidator & {
    source: string;
    text?: string;
    placeholder?: string;
    information?: string;
    invalidapproval?: string;
    invalidOrg?: string;
    SGheading?: string;
    SGsource?: string;
    SGtext?: string;
    optional?: boolean;
    fetchSG?: boolean;
    autocomplete?: string;
};
type Evaluation = NodeBase<"Evaluation"> & {
    /**
     * The id of the node, or two nodes, to evaluate
     */
    testing?: string | [string, string];
    /**
     * The text string to be used when sad state
     */
    sad: string;
    /**
     * The text string to be used when happy state
     */
    happy: string;
    final: boolean;
    showValue?: boolean;
    unit?: string;
    optional?: boolean;
    groupedSimple?: boolean;
};
type Image = NodeBase<"Image"> & {
    text?: string;
    image: ImageSrc;
};
type Cell = NodeBase<"Cell"> & {
    text: string;
    rowSpan?: number;
    colSpan?: number;
    test?: Expression$1;
};
type Heading = NodeBase<"Heading"> & {
    text: string;
    rowSpan?: number;
    colSpan?: number;
    test?: Expression$1;
};
type Table = NodeBase<"Table"> & CommonOptions & {
    cells: Array<Array<Cell | Heading>>;
    simple?: boolean;
};
type Sum = InputNodeBase<"Sum"> & CommonOptions & {
    values: Array<string | number>;
    operations: Array<"+" | "-" | "*" | "/" | "-/" | "%">;
    details?: string;
    final?: boolean;
    minimum?: number;
    summary?: string;
    unit?: string;
    groupedSimple?: boolean;
};
type Reference = NodeBase<"Reference", false> & {
    nodeId: string;
};
type Signature = NodeBase<"Signature">;
type Node = Page | Result | Error | ErrorOk | Group | Checkbox | Radio | Select | Input | Number | Textarea | Answer | Image | Cell | Heading | Table | Branch | FetchOrg | Reference | Text | Evaluation | Information | Signature | Sum;
/**
 * Renderable answer type has a boolean for the disabled prop
 * (after evaluation of the expression)
 */
type RenderableAnswer = WithError<Omit<Answer, "disabled"> & {
    disabled?: boolean;
}>;
/**
 * The renderable branch node has its children replaced with
 * renderable children
 */
type RenderableBranchNode = WithError<Omit<BranchNode, "children"> & {
    children: RenderableNode[];
}>;
type RenderableError = WithError<Omit<Error, "children"> & {
    children: RenderableNode[];
}>;
type RenderableErrorOk = WithError<Omit<ErrorOk, "children"> & {
    children: RenderableNode[];
}>;
type RenderableResult = WithError<Omit<Result, "children"> & {
    children: RenderableNode[];
}>;
type RenderablePage = WithError<Omit<Page, "children"> & {
    children: RenderableNode[];
}>;
type RenderableGroup = WithError<Omit<Group, "children"> & {
    children: RenderableNode[];
}>;
type RenderableBranch = WithError<Omit<Branch, "branches"> & {
    branches: RenderableBranchNode[];
}>;
type RenderableCheckbox = WithError<Omit<Checkbox, "disabled" | "options"> & {
    disabled?: boolean;
    options: RenderableAnswer[];
}>;
type RenderableRadio = WithError<Omit<Radio, "disabled" | "options"> & {
    disabled?: boolean;
    options: RenderableAnswer[];
}>;
type RenderableSelect = WithError<Omit<Select, "options"> & {
    options: RenderableAnswer[];
}>;
type RenderableInput = WithError<Omit<Input, "disabled"> & {
    disabled?: boolean;
}>;
type RenderableNumber = WithError<Omit<Number, "disabled"> & {
    disabled?: boolean;
}>;
type RenderableFetchOrg = WithError<Omit<FetchOrg, "disabled"> & {
    disabled?: boolean;
}>;
type RenderableTable = WithError<Omit<Table, "cells"> & {
    cells: Array<Array<Omit<Cell | Heading, "test"> & {
        inactive?: boolean;
    }>>;
}>;
type RenderableTextarea = WithError<Textarea>;
type RenderableImage = WithError<Image>;
type RenderableCell = WithError<Cell>;
type RenderableHeading = WithError<Heading>;
type RenderableText = WithError<Text>;
type RenderableEvaluation = WithError<Evaluation>;
type RenderableInformation = WithError<Information>;
type RenderableSignature = WithError<Signature>;
type RenderableSum = WithError<Sum>;
type WithError<T> = T & {
    errors?: {
        disabled?: ValidationResult$1 | (ValidationResult$1 | ValidationError$1)[];
        validation?: {
            error?: boolean | undefined;
            message?: string | undefined;
        };
        required?: boolean | undefined;
    };
};
type RenderableNode = RenderableError | RenderableErrorOk | RenderableResult | RenderablePage | RenderableGroup | RenderableBranch | RenderableCheckbox | RenderableRadio | RenderableSelect | RenderableInput | RenderableNumber | RenderableFetchOrg | RenderableAnswer | RenderableTable | RenderableTextarea | RenderableImage | RenderableCell | RenderableHeading | RenderableText | RenderableEvaluation | RenderableInformation | RenderableSignature | RenderableSum;
/**
 * A node that has been validated. If the node has errors, information about the errors will be
 * included on the node on the `errors` property.
 */
type ValidatedNode<T extends {}> = T & {
    errors?: {
        disabled?: ValidationResult$1 | (ValidationResult$1 | ValidationError$1)[];
        validation?: {
            error?: boolean | undefined;
            message?: string | undefined;
        };
        required?: boolean | undefined;
    };
};
type ResolveDisabled<T extends Node | RenderableNode> = T extends RenderableNode ? T : Omit<T, "disabled"> & (T extends {
    disabled?: Expression$1;
} ? {
    disabled: boolean;
} : {});
/**
 * This is a utility type for taking a Node type and converting it to a type that matches
 * what is passed as props to the render components. Ideally this should have been provided
 * as the return type, but due to recursive steps in the schema parsing, this is not at all
 * easy to do..
 */
type Render<T extends Node | RenderableNode> = ValidatedNode<Omit<ResolveDisabled<T>, "show" | "hide" | "test" | "hidden">> & {
    debug: boolean;
};
/**
 * A node that has been validated and is ready to be rendered. A node wrapped in this type will
 * have the current value of the node's property included on the `currentValue` property, a function
 * to set the value of the node's property on the `setData` property.
 *
 * Also, the `show`, `hide` and `test` properties removed, as well as the `hidden` property.
 */
type RenderWithData<T extends RenderableNode["type"], V = any> = Render<Extract<RenderableNode, {
    type: T;
}>> & (Render<Extract<RenderableNode, {
    type: T;
}>> extends {
    property: any;
} ? {
    currentValue?: V;
    setData: <O extends boolean = false>(property: string, value: O extends true ? any : V, 
    /**
     * While something of an anti-pattern it is sometimes necessary to write
     * to other data than the current node. In practice this means passing a
     * property other than the current node's property.
     */
    outsideNode?: O) => void;
} : {}) & {
    data: State;
};
type Schema = Array<Branch | Page | Result | Error>;
type WizardDefinition = {
    meta: Metadata;
    schema: Schema;
    computed?: Record<string, Expression$1>;
};
type State = Record<string, any>;

export { Answer, Branch, BranchNode, Checkbox, Error, ErrorOk, Evaluation, FetchOrg, Group, Image, Input, InputNodeBase, Metadata, Node, NodeBase, NodeTitles, NodeType, Number, Page, index as Primitives, Radio, Reference, Render, RenderWithData, RenderableAnswer, RenderableError, RenderableErrorOk, RenderableNode, RenderablePage, RenderableResult, Result, Schema, Select, State, StyleProvider, Sum, Table, Text, Textarea, ValidatedNode, WithError, _default as Wizard, WizardDefinition, index$2 as dsl, index$3 as state, track, trackEvent };
