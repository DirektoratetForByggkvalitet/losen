import React from 'react';
import { StylesProps } from '../styles';
export declare const StyleContext: React.Context<{
    logo: {
        default: string;
        mobile: string;
    };
    font: {
        primary: string;
        secondary: string;
    };
    color: {
        light: string;
        dark: string;
        lightorange: string;
        lightgreen: string;
        bluegreen: string;
        warmgray3: string;
        warmgray2: string;
        darkgray: string;
        red: string;
        lightred: string;
        oldred: string;
        green: string;
        oldgreen: string;
    };
    padding: {
        small: string;
        medium: string;
        large: string;
    };
    size: {
        blockWidth: string;
        navWidth: string;
        headerHeight: string;
        mobileContentWidth: string;
    };
}>;
type Props = {
    children: React.ReactNode;
    styles?: StylesProps['styles'];
};
export declare function StyleProvider({ children, styles }: Props): React.JSX.Element;
export {};
