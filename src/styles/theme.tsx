/* eslint-disable import/no-anonymous-default-export */
export default {
  grid: {
    container: "130rem",
    gutter: "3.2rem",
  },
  border: {
    radius: {
      small: "0.4rem",
      medium: "0.6rem",
      large: "0.6rem",
    },
  },
  font: {
    family:
      "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxsmall: "0.7rem",
      xsmall: "0.9rem",
      small: "1rem",
      medium: "1.2rem",
      large: "1.4rem",
      xlarge: "1.6rem",
      xxlarge: "1.8rem",
    },
  },
  colors: {
    background: "#fff",
    title: "#06092B",
    subtitle: '#474251',
    input: "#fcfcfc",
    primary: "#ccc",
    table: "#fefefe",
    tableHeader:'#06092B25',
    border: "#1E1528",


    secondary: "#0b7bb8",
    mainBg: "#06092B",
    white: "#FAFAFA",
    black: "#030517",
    lightGray: "#EAEAEA",
    gray: "#ccc",
    darkGray: "#a0a0a0",
    textInput: "#1E1528",
    sidebarBG: "#1E1528",
  },
  spacings: {
    xxsmall: "0.3rem",
    xsmall: "1rem",
    small: "2rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  sizes: {
    xxsmall: "1rem",
    small: "5rem",
    medium: "10rem",
    large: "20rem",
    fullWidth: "100%",
  },
} as const;
