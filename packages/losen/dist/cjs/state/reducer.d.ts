import { SET_DATA, Action } from "losen/state/actions";
import { State, WizardDefinition } from "losen";
export declare function applyComputed(wizard: WizardDefinition, state: State): {
    $computed: {};
};
export declare function setDataUpdate(wizard: WizardDefinition, state: State, { payload }: Extract<Action, {
    type: typeof SET_DATA;
}>): {
    $computed: {};
};
declare const _default: (wizard: WizardDefinition) => (state: {
    $computed: {};
} | undefined, action: Action) => {
    $computed: {};
} | {
    $showResetModal: boolean;
    $computed: {};
};
export default _default;
//# sourceMappingURL=reducer.d.ts.map