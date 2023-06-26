import React from "react";
type Props = {
    translations: Record<string, Record<string, any>>;
    setLanguage: (languageKey: string) => void;
    currentLanguage: string;
};
declare function LanguageSelector({ translations: translationsObject, currentLanguage, setLanguage }: Props): import("react/jsx-runtime").JSX.Element | null;
declare const _default: import("react-redux").ConnectedComponent<typeof LanguageSelector, {
    translations: Record<string, Record<string, any>>;
    context?: React.Context<import("react-redux").ReactReduxContextValue<any, import("redux").AnyAction>> | undefined;
    store?: import("redux").Store<any, import("redux").AnyAction> | undefined;
}>;
export default _default;
//# sourceMappingURL=LanguageSelector.d.ts.map