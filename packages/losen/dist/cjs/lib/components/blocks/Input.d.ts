import React from 'react';
import { RenderWithData } from 'losen';
type Props = RenderWithData<"Input", string> & {
    update?: (value: string) => void;
};
export default function Input({ heading, property, errors, disabled, currentValue, placeholder, autocomplete, inputType, setData, update, }: Props): React.JSX.Element;
export {};
