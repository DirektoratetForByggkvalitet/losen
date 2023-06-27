import React from 'react';
import { RenderWithData, State } from 'losen';
type Props = RenderWithData<"Sum">;
export declare const calculateSum: (data: State, values: Props["values"], operations?: Props["operations"], minimum?: number) => string | number;
export default function Sum({ data, values, operations, minimum, groupedSimple, final, heading, unit, summary, details }: Props): React.JSX.Element;
export {};
