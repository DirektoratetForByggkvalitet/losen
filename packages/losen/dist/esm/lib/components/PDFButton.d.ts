/// <reference types="react" />
type Props = {
    pdfServiceUrl: string;
    localStorageKey: string;
    pageHeading?: string;
};
export default function PDFButton({ localStorageKey, pageHeading, pdfServiceUrl, }: Props): import("react").JSX.Element;
export {};
