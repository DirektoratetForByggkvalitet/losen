import React from 'react';
import { RenderWithData } from 'losen';
type Props = RenderWithData<"Answer"> & {
    checked?: boolean;
    name: string;
    onChange?: () => void;
};
export default function RadioInput({ id, value, checked, debug, disabled, heading, image, messages, onChange, text, name }: Props): React.JSX.Element;
export {};
