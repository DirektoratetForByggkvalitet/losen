declare const styles: {
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
};
export type PrimitiveProps<T extends {} = {}> = {
    styles: typeof styles;
    debug?: boolean;
} & T;
export type StylesProps = {
    styles?: Partial<typeof styles>;
};
export default styles;
