/// <reference types="react" />
import { getErrorPages } from "losen/utils/selectors";
import { RenderableNode, State, WizardDefinition } from "losen";
type Props = {
    children: RenderableNode[];
    schema: RenderableNode[];
    errorPages: ReturnType<typeof getErrorPages>;
    exporter?: string;
    exports?: Record<string, (state: State) => any>;
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
    debug: boolean;
    pageid: string;
    setPage: (page: string) => void;
    title?: string;
    summaryTitle?: string;
    wizard: WizardDefinition;
};
declare function Result(props: Props): import("react").JSX.Element;
declare const _default: import("react-redux").ConnectedComponent<typeof Result, {
    title?: string | undefined;
    children: RenderableNode[];
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
    } | undefined;
    exporter?: string | undefined;
    debug: boolean;
    setPage: (page: string) => void;
    pageid: string;
    exports?: Record<string, (state: State) => any> | undefined;
    schema: RenderableNode[];
    summaryTitle?: string | undefined;
    wizard: WizardDefinition;
    context?: import("react").Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
export default _default;
