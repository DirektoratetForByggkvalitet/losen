const styles = {
  font: {
    headline: '"PP Mori", "Open Sans", arial, helvetika, sans-serif',
    body: '"PP Mori", "Altis-Light", "Altis", "Open Sans", arial, sans-serif',
  },
  color2: {
    pageBackground: "#ebf4fa", // Havblå 50
    sectionBackground: "#ffffff", // Hvit
    textHeading: "#003045",
    textDark: "#003045",
    textWhite: "#ffffff",
    link: "#005275",
    visitedLink: "#551abb",
    outline: "#003045", // Havblå 900
    focus: "rgba(0, 92, 173, 0.4)", // Himmelblå 700 40%
    primary: "#003045", // Havblå 900
    primaryLight: "rgba(0, 48, 69, 0.85)", 
    primaryXLight: "rgba(0, 48, 69, 0.75)", 
    secondary: "#89bad6", // Havblå 300
    secondaryLight: "#c7e0f2", // havblå 100
    secondaryXLight: "#ebf4fa", // havblå 50
    error: "#db0000", // Rød 700
    errorLight: "#ffc5c2", // Rød 100
    errorXLight: "#fceceb", // Rød 50
    positive: "#177912", // Sindre
    positiveLight: "#cbebb0", // Grønn 100
    positiveXLight: "#f1fae3", // Grønn 50
    negative: "#ffbe00", // oransje 200
    negativeLight: "#fcefb6", // oransje 100
    negativeXLight: "#fff8db", // oransje 50
  },
  borderRadius: {
    small: "0px",
    large: "0px",
  },
  padding: {
    xxSmall: "4px",
    xSmall: "8px", 
    small: "12px", // 16 
    medium: "20px",
    large: "24px",
    xLarge: "48px",
  },
  size: {
    imageWidth: "600px",
    pageWidth: "1280px",
    blockWidth: "800px",
    navWidth: "340px",
    headerHeight: "75px",
    mobileContentWidth: "100%",
  },
  iconSize: {
    small: "20px",
    medium: "24px",
  },
  easing: {
    easeOut: "cubic-bezier(0.22, 1, 0.36, 1)"
  },
  text: {
    body: {
      fontSize: "16px",
      fontWeight: "400",
      boldWeight: "600",
      lineHeight: "24px",
      letterSpacing: "0.01em",
    },
    lead: {
      fontSize: "18px",
      fontWeight: "400",
      boldWeight: "600",
      lineHeight: "26px",
      letterSpacing: "0.01em",
    },
    h1: {
      fontSize: "28px",
      fontWeight: "600",
      lineHeight: "36px",
      letterSpacing: "0",
    },
    h2: {
      fontSize: "22px",
      fontWeight: "600",
      lineHeight: "30px",
      letterSpacing: "0",
    },
    h3: {
      fontSize: "18px",
      fontWeight: "600",
      lineHeight: "24px",
      letterSpacing: "0",
    },
    subHeading: {
      fontSize: "12px",
      fontWeight: "600",
      lineHeight: "18px",
      letterSpacing: "0",
      textTransform: "uppercase"
    },
    caption: {
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      letterSpacing: "0",
      fontStyle: "italic"
    },
    label: {
      fontSize: "18px",
      fontWeight: "400",
      lineHeight: "26px",
      letterSpacing: "0.01em",
    },
  }
};

export type PrimitiveProps<T extends {} = {}> = {
  styles: typeof styles;
  debug?: boolean;
} & T;

export type StylesProps = {
  styles?: Partial<typeof styles>;
};

export default styles;
