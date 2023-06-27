import React from 'react';
type Props = {
    id?: string;
    text?: string;
    inline?: boolean;
    h2?: boolean;
    h3?: boolean;
};
export default function Html({ id, text, inline, h2, h3 }: Props): React.JSX.Element | null;
export {};
