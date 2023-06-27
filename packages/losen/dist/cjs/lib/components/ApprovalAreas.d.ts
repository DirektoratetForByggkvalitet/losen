import React from "react";
type Props = {
    areas?: Array<{
        'function': string;
        subject_area: string;
        grade: string;
    }>;
    title?: boolean;
};
export default function ApprovalAreas({ areas, title }: Props): React.JSX.Element | null;
export {};
