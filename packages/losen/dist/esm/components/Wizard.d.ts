import React from "react";
import { RenderableNode, State, WizardDefinition } from 'losen';
import { setData } from "../state/actions";
import { Translations } from "../utils/reduce-wizard";
import { StylesProps } from "../styles";
type Props = {
    data?: State;
    debug?: boolean;
    warningBeforeUnload?: boolean;
    exports?: Record<string, (state: State) => any>;
    schema: RenderableNode[];
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
    wizard: WizardDefinition;
    showResetModal?: boolean;
};
declare function Wizard({ data, debug, warningBeforeUnload, exports, showIntro, styles, translations, showResetModal, schema, setData, tableOfContents, title, wizard }: Props): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react-redux").ConnectedComponent<typeof Wizard, {
    styles?: Partial<{
        logo: {
            default: string;
            mobile: string;
        };
        font: {
            primary: string;
            secondary: string;
        };
        color: {
            light: string;
            dark: string;
            lightorange: string;
            lightgreen: string;
            bluegreen: string;
            warmgray3: string;
            warmgray2: string;
            darkgray: string;
            red: string;
            lightred: string;
            oldred: string;
            green: string;
            oldgreen: string;
        };
        padding: {
            small: string;
            medium: string;
            large: string;
        };
        size: {
            blockWidth: string;
            navWidth: string;
            headerHeight: string;
            mobileContentWidth: string;
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
    exports?: Record<string, (state: State) => any> | undefined;
    wizard: WizardDefinition;
    warningBeforeUnload?: boolean | undefined;
    showResetModal?: boolean | undefined;
    context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
export default _default;
//# sourceMappingURL=Wizard.d.ts.map