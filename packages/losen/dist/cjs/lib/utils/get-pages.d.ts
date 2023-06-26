import type { NodeTitles, RenderableNode, ValidatedNode } from "losen";
/**
 * Returns a list of the wizard pages with number of erros per page and whether
 * or not the page has been completed or not
 *
 * @param {*} reducedSchema A reduced schema (the result of reduceWizard)
 */
export default function getPages(reducedSchema: ValidatedNode<RenderableNode>[], nodeTitles: NodeTitles): ({
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    type: "Error";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    lead?: string | undefined;
    children: RenderableNode[];
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    type: "ErrorOk";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    lead?: string | undefined;
    children: RenderableNode[];
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    type: "Result";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    lead?: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    exporter?: string | undefined;
    children: RenderableNode[];
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    type: "Page";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    lead?: string | undefined;
    children: RenderableNode[];
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    text?: string | undefined;
    type: "Group";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    children: RenderableNode[];
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    type: "Branch";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    branches: (Omit<import("losen").BranchNode, "children"> & {
        children: RenderableNode[];
    } & {
        errors?: {
            disabled?: import("./dsl").ValidationResult | (import("./dsl").ValidationResult | import("./dsl").ValidationError)[] | undefined;
            validation?: {
                error?: boolean | undefined;
                message?: string | undefined;
            } | undefined;
            required?: boolean | undefined;
        } | undefined;
    })[];
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    image?: {
        url: string;
        alt: string;
        text?: string | undefined;
    } | undefined;
    text?: string | undefined;
    type: "Checkbox";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    property: string;
    allMandatory?: boolean | undefined;
    optional?: boolean | undefined;
    grid?: boolean | undefined;
    update?: string[] | undefined;
    disabled?: boolean | undefined;
    options: import("losen").RenderableAnswer[];
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    image?: {
        url: string;
        alt: string;
        text?: string | undefined;
    } | undefined;
    text?: string | undefined;
    type: "Radio";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    property: string;
    grid?: boolean | undefined;
    clear?: string[] | undefined;
    disabled?: boolean | undefined;
    options: import("losen").RenderableAnswer[];
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    image?: {
        url: string;
        alt: string;
        text?: string | undefined;
    } | undefined;
    text?: string | undefined;
    type: "Select";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    property: string;
    autocomplete?: string | undefined;
    defaultOption?: string | undefined;
    options: import("losen").RenderableAnswer[];
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    image?: {
        url: string;
        alt: string;
        text?: string | undefined;
    } | undefined;
    text?: string | undefined;
    type: "Input";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    property: string;
    optional?: boolean | undefined;
    autocomplete?: string | undefined;
    validator?: (({
        test?: undefined;
        pattern: string;
        object?: string | undefined;
    } | {
        test: import("./dsl").Expression;
    }) & {
        error: string;
    }) | undefined;
    placeholder?: string | undefined;
    inputType?: string | undefined;
    disabled?: boolean | undefined;
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    image?: {
        url: string;
        alt: string;
        text?: string | undefined;
    } | undefined;
    text?: string | undefined;
    type: "Number";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    property: string;
    optional?: boolean | undefined;
    autocomplete?: string | undefined;
    validator?: (({
        test?: undefined;
        pattern: string;
        object?: string | undefined;
    } | {
        test: import("./dsl").Expression;
    }) & {
        error: string;
    }) | undefined;
    placeholder?: string | undefined;
    minimum?: number | undefined;
    maximum?: number | undefined;
    step?: number | undefined;
    unit?: string | undefined;
    disabled?: boolean | undefined;
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    source: string;
    image?: {
        url: string;
        alt: string;
        text?: string | undefined;
    } | undefined;
    text?: string | undefined;
    type: "FetchOrg";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    property: string;
    optional?: boolean | undefined;
    autocomplete?: string | undefined;
    validator?: (({
        test?: undefined;
        pattern: string;
        object?: string | undefined;
    } | {
        test: import("./dsl").Expression;
    }) & {
        error: string;
    }) | undefined;
    placeholder?: string | undefined;
    information?: string | undefined;
    invalidapproval?: string | undefined;
    invalidOrg?: string | undefined;
    SGheading?: string | undefined;
    SGsource?: string | undefined;
    SGtext?: string | undefined;
    fetchSG?: boolean | undefined;
    disabled?: boolean | undefined;
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    image?: {
        url: string;
        alt: string;
        text?: string | undefined;
    } | undefined;
    text?: string | undefined;
    type: "Answer";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    value: any;
    messages?: {
        message: string;
        warning?: boolean | undefined;
        hide?: import("./dsl").Expression | undefined;
        show?: import("./dsl").Expression | undefined;
        hidden?: import("./dsl").Expression | undefined;
    }[] | undefined;
    disabled?: boolean | undefined;
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    image?: {
        url: string;
        alt: string;
        text?: string | undefined;
    } | undefined;
    text?: string | undefined;
    type: "Table";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    simple?: boolean | undefined;
    cells: (Omit<({
        type: "Cell";
    } & {
        id: string;
    } & {
        show?: import("./dsl").Expression | undefined;
        hide?: import("./dsl").Expression | undefined;
        hidden?: import("./dsl").Expression | undefined;
    } & {
        text: string;
        rowSpan?: number | undefined;
        colSpan?: number | undefined;
        test?: import("./dsl").Expression | undefined;
    }) | ({
        type: "Heading";
    } & {
        id: string;
    } & {
        show?: import("./dsl").Expression | undefined;
        hide?: import("./dsl").Expression | undefined;
        hidden?: import("./dsl").Expression | undefined;
    } & {
        text: string;
        rowSpan?: number | undefined;
        colSpan?: number | undefined;
        test?: import("./dsl").Expression | undefined;
    }), "test"> & {
        inactive?: boolean | undefined;
    })[][];
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    type: "Textarea";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    text?: string | undefined;
    image?: {
        url: string;
        alt: string;
        text?: string | undefined;
    } | undefined;
    property: string;
    validator?: (({
        test?: undefined;
        pattern: string;
        object?: string | undefined;
    } | {
        test: import("./dsl").Expression;
    }) & {
        error: string;
    }) | undefined;
    information?: string | undefined;
    placeholder?: string | undefined;
    optional?: boolean | undefined;
    autocomplete?: string | undefined;
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    type: "Image";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    text?: string | undefined;
    image: {
        url: string;
        alt: string;
        text?: string | undefined;
    };
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    type: "Cell";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    text: string;
    rowSpan?: number | undefined;
    colSpan?: number | undefined;
    test?: import("./dsl").Expression | undefined;
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    type: "Heading";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    text: string;
    rowSpan?: number | undefined;
    colSpan?: number | undefined;
    test?: import("./dsl").Expression | undefined;
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    type: "Text";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    text?: string | undefined;
    warning?: boolean | undefined;
    printonly?: boolean | undefined;
    printhide?: boolean | undefined;
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    type: "Evaluation";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    testing?: string | [string, string] | undefined;
    sad: string;
    happy: string;
    final: boolean;
    showValue?: boolean | undefined;
    unit?: string | undefined;
    optional?: boolean | undefined;
    groupedSimple?: boolean | undefined;
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    text?: string | undefined;
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    warning?: boolean | undefined;
    printonly?: boolean | undefined;
    printhide?: boolean | undefined;
    type: "Information";
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    type: "Signature";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
} | {
    errors: number;
    heading: string | {
        complete: string;
        completeWithError: string;
        incomplete: string;
        incompleteWithError: string;
    } | undefined;
    completed: boolean;
    type: "Sum";
    id: string;
    show?: import("./dsl").Expression | undefined;
    hide?: import("./dsl").Expression | undefined;
    hidden?: import("./dsl").Expression | undefined;
    text?: string | undefined;
    image?: {
        url: string;
        alt: string;
        text?: string | undefined;
    } | undefined;
    property: string;
    values: (string | number)[];
    operations: ("+" | "-" | "*" | "/" | "-/" | "%")[];
    details?: string | undefined;
    final?: boolean | undefined;
    minimum?: number | undefined;
    summary?: string | undefined;
    unit?: string | undefined;
    groupedSimple?: boolean | undefined;
})[];
