import { Answer, Node, NodeTitles, RenderableNode, State, ValidatedNode } from "losen";
export type Translations = Record<string, {
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
type NodeMap = Record<string, Node>;
export declare function translateNode<T extends RenderableNode | Node>(node: T, state: State, translations: Translations): T;
export declare const mapTranslateNode: <T extends Node>(state: State, translations: Translations) => (node: T) => T;
/**
 * Parse tests for cells in (the dynamic) Table in order to set the invalid
 * property on cells that that has a test that does not evaluate to a truthy
 * result
 */
export declare const parseTableCells: <T extends Node>(state: State, translations: Translations) => (node: T) => T;
/**
 * Reduce option messages to a single (if any) message.
 */
export declare const reduceOptionMessages: (state: State) => (messages: Answer["messages"]) => {
    message: string;
    warning?: boolean | undefined;
    hide?: import("losen/utils/dsl").Expression | undefined;
    show?: import("losen/utils/dsl").Expression | undefined;
    hidden?: import("losen/utils/dsl").Expression | undefined;
}[];
export declare const filterSchemaNodes: (state: State) => (node: Node) => boolean | undefined;
export declare const reduceBranches: (state: State, nodeTitles: NodeTitles, translations?: Translations, nodeMap?: NodeMap) => <T extends Node>(res: T[], node: T) => T[];
export declare const mapWizardChildren: <T extends Node>(state: State, nodeTitles: NodeTitles, translations: Translations | undefined, nodeMap: NodeMap) => (node: T) => ValidatedNode<Node> & {
    errorDescription?: string;
};
export declare const reduceOptions: (state: State, translations: Translations, nodeMap: NodeMap) => <T extends Node>(node: T) => ValidatedNode<RenderableNode>;
export declare const liftChildrenBranchPages: <T extends ValidatedNode<RenderableNode>>(res: T[], node: T) => T[];
export declare const replaceReferences: <T extends Node | RenderableNode>(nodeMap: NodeMap) => (node: T) => T;
export declare const buildNodeMap: (schema: (RenderableNode | Node)[]) => NodeMap;
/**
 * Get rid of the show, hide and hidden props - not needed in render, and no
 * use in passing them around.
 */
export declare const discardVisibilityProps: <T extends ValidatedNode<RenderableNode>>(node: T) => T;
export default function reduceWizard(schema: Node[], state: State, nodeTitles?: NodeTitles, translations?: Translations, nodeMap?: NodeMap): ValidatedNode<RenderableNode>[];
export {};
//# sourceMappingURL=reduce-wizard.d.ts.map