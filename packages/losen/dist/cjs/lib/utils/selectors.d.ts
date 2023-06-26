import { Translations } from "./reduce-wizard";
import { Node, NodeTitles, Render, RenderableNode, Result, Schema, State, ValidatedNode, WizardDefinition } from "losen";
export declare function getNodeErrors(node: ValidatedNode<RenderableNode>): number;
export declare function getErrorPages(schema: Schema, state: State): Array<{
    id?: string;
    type: Node["type"];
    heading?: Result["heading"];
    errorNodes?: Array<{
        property?: string;
        heading?: Result["heading"];
        errors?: Render<Node>["errors"];
    }>;
}>;
export declare function getTitle(state: State, { meta: { title } }: WizardDefinition, translations: Translations): string;
export declare function getNodeTitles(schema: Node[], translations: Translations, state: State): NodeTitles;
