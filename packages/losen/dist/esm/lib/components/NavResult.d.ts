import React from "react";
type Props = {
    setPage: (id: string) => void;
    id: string;
    active?: boolean;
};
export default function NavResult({ setPage, id, active }: Props): React.JSX.Element;
export {};
