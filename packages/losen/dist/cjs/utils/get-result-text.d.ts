type ResultProperty = string | {
    incompleteWithError: string;
    incomplete: string;
    completeWithError: string;
    complete: string;
};
export default function getResultText(property: undefined | string | ResultProperty, incomplete: boolean, hasSoftErrors: boolean): string | undefined;
export {};
//# sourceMappingURL=get-result-text.d.ts.map