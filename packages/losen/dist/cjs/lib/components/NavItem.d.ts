/// <reference types="react" />
type Props = {
    active?: boolean;
    done?: boolean;
    heading?: string;
    id: string;
    index: number;
    setPage: (page: string, property?: string) => void;
};
export default function NavItem({ active, done, heading, id, index, setPage }: Props): import("react").JSX.Element;
export {};
