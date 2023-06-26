import { ChangeEventHandler } from 'react';
import { RenderWithData } from 'losen';
type Props = RenderWithData<"Answer"> & {
    checked?: boolean;
    name: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};
export default function CheckboxInput({ checked, debug, disabled, heading, id, image, messages, name, onChange, text, ...props }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=CheckboxInput.d.ts.map