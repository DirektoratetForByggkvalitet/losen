declare global {
    interface Navigator {
        msSaveOrOpenBlob?: Function;
    }
}
export default function createPDF(pdfServiceUrl: string, localStorageKey: string): Promise<void>;
//# sourceMappingURL=create-pdf.d.ts.map