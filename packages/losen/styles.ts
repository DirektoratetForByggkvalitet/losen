const styles = {
  logo: {
    default: 'url("https://dibk.no/Frontend/assets/images/dibk_logo_mob.svg")',
    mobile: 'url("https://dibk.no/Frontend/assets/images/DiBk_logo_rgb.svg")',
  },
  font: {
    primary: '"Open Sans", arial, sans-serif',
    secondary: '"Altis-Light", "Altis", "Open Sans", arial, sans-serif',
  },
  color: {
    light: "#00757F",
    dark: "#072938",
    lightorange: "#faefdf",
    lightgreen: "#f0f2cb",
    bluegreen: "#54acb8",
    warmgray3: "#f2f1f0",
    warmgray2: "#e5e3e1",
    darkgray: "#989390",
    red: "#c1272d",
    lightred: "#ffeaeb",
    oldred: "#9d312f",
    green: "#007a1d",
    oldgreen: "#809e3d",
  },
  padding: {
    small: "2px",
    medium: "5px",
    large: "8px",
  },
  size: {
    blockWidth: "800px",
    navWidth: "340px",
    headerHeight: "75px",
    mobileContentWidth: "90%",
  },
};

export type PrimitiveProps<T extends {} = {}> = {
  styles: typeof styles;
  debug?: boolean;
} & T;

export type StylesProps = {
  styles?: Partial<typeof styles>;
};

export default styles;
