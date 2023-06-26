import React from 'react';
type Props = {
    image: {
        url?: string;
        alt?: string;
    };
};
export default function Image({ image }: Props): React.JSX.Element | null;
export {};
