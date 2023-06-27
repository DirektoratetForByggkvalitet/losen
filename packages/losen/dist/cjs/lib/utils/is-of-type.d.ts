import { Node, Render, RenderableNode } from "..";
/**
 * Checks if a node is of one of the specified types. If it is, it returns true and narrows the
 * type of the node.
 */
export declare function isOfType<T extends Node["type"], P extends Node | RenderableNode>(node: P, types: T[]): node is Extract<P, {
    type: T;
}>;
/**
 * Checks if a node has the specified property. If it does, it returns true and narrows the type
 * of the node to types that has the property.
 */
export declare function hasProperty<K extends string, T extends Node | Render<Node> | RenderableNode>(obj: T, prop: K): obj is Extract<T, {
    [P in K]?: any;
}>;
