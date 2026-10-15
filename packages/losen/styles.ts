const styles = {
  font: {
    headline: '"PPMori", "Open Sans", arial, helvetika, sans-serif',
    body: '"PPMori", "Altis-Light", "Altis", "Open Sans", arial, sans-serif',
  },
  color2: {
    pageBackground: "#ebf3ff", // blue-50
    sectionBackground: "#ffffff", // Hvit
    textHeading: "#003361", // blue-800
    textDark: "#202020", // gray-800
    textWhite: "#ffffff",
    link: "#025174", // blue-700
    visitedLink: "#551abb",
    outline: "#003361", // blue-800
    focus: "rgba(1, 92, 173, 0.4)", // blue-600 40%
    primary: "#003361", // blue-800
    primaryLight: "rgba(0, 51, 97, 0.85)",
    primaryXLight: "rgba(0, 51, 97, 0.75)",
    secondary: "#89bad6", // blue-300
    secondaryLight: "#c6e0f2", // blue-100
    secondaryXLight: "#ebf3ff", // blue-50
    error: "#db0000", // Darker than red-500 (#f55) to keep text contrast
    errorLight: "#f7e5e5", // red-100
    errorXLight: "#f5f0f0", // red-50
    positive: "#177912", // Darker than green-500 (#5ccb35) to keep text contrast
    positiveLight: "#cbebb0", // green-100
    positiveXLight: "#f1fae3", // green-50
    negative: "#ffdf50", // yellow-500
    negativeLight: "#fcefb6", // yellow-100
    negativeXLight: "#faf0de", // yellow-50
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
    easeOut: "cubic-bezier(0.22, 1, 0.36, 1)",
  },
  text: {
    body: {
      fontSize: "20px",
      fontWeight: "400",
      boldWeight: "600",
      lineHeight: "30px",
      letterSpacing: "0",
    },
    lead: {
      fontSize: "20px",
      fontWeight: "400",
      boldWeight: "600",
      lineHeight: "30px",
      letterSpacing: "0",
    },
    h1: {
      fontSize: "30px",
      fontWeight: "600",
      lineHeight: "41px",
      letterSpacing: "0",
    },
    h2: {
      fontSize: "24px",
      fontWeight: "600",
      lineHeight: "32px",
      letterSpacing: "0",
    },
    h3: {
      fontSize: "20px",
      fontWeight: "600",
      lineHeight: "30px",
      letterSpacing: "0",
    },
    subHeading: {
      fontSize: "14px",
      fontWeight: "600",
      lineHeight: "20px",
      letterSpacing: "0",
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "24px",
      letterSpacing: "0",
      fontStyle: "italic",
    },
    label: {
      fontSize: "20px",
      fontWeight: "400",
      lineHeight: "32px",
      letterSpacing: "0",
    },
  },
};

export type PrimitiveProps<T extends {} = {}> = {
  $styles: typeof styles;
  $debug?: boolean;
} & T;

export type StylesProps = {
  styles?: Partial<typeof styles>;
};

export default styles;
