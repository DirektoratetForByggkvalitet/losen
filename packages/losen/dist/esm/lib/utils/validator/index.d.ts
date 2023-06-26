import { Metadata, Schema } from "../..";
type ValidationError = {
    id?: string;
    path: string[];
    error: string;
};
export default function validate({ meta, schema, }: {
    meta: Metadata;
    schema: Schema;
}): ValidationError[];
export {};
