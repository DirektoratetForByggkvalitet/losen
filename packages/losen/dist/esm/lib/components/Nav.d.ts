import React from "react";
type Props = {
    heading?: string;
    page?: string;
    setPage: (page: string, property?: string) => void;
    tableOfContents: any[];
    showIntro: () => void;
    translations: Record<string, {}>;
};
export default function Nav({ heading, page: currentPage, setPage, tableOfContents, showIntro, translations }: Props): React.JSX.Element;
export {};
