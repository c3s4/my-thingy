// eslint-disable-next-line @typescript-eslint/no-var-requires
// const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        DEFAULT: "#FECA2F",
      },
      secondary: {
        DEFAULT: "#FD9ED8",
      },
      accent: {
        DEFAULT: "#01c0c5",
      },
      success: "",
      warning: "",
      danger: "",
      neutral: {
        dark: "#282B3A",
        medium: "#5D606B",
        light: "#F6F6F6",
      },
    },
    fontFamily: {
      head: ["Montserrat", "sans-serif"],
      subhead: ["Ruda", "sans-serif"],
      body: ["Telex", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
