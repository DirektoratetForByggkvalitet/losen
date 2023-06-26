import { RenderWithData } from 'losen';
type Props = RenderWithData<"Answer"> & {
    checked?: boolean;
    name: string;
    onChange?: () => void;
};
export default function RadioInput({ id, value, checked, debug, disabled, heading, image, messages, onChange, text, name }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=RadioInput.d.ts.map