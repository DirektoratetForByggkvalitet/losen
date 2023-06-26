import { RenderWithData, State } from 'losen';
type Props = RenderWithData<"Sum">;
export declare const calculateSum: (data: State, values: Props["values"], operations?: Props["operations"], minimum?: number) => string | number;
export default function Sum({ data, values, operations, minimum, groupedSimple, final, heading, unit, summary, details }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Sum.d.ts.map