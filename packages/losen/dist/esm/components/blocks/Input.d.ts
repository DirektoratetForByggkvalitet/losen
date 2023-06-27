import { RenderWithData } from 'losen';
type Props = RenderWithData<"Input", string> & {
    update?: (value: string) => void;
};
export default function Input({ heading, property, errors, disabled, currentValue, placeholder, autocomplete, inputType, setData, update, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Input.d.ts.map