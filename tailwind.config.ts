/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    // our colors theme
    colors: {
      primary: "#F7C532",
      secondary: "#f6ae25",
      white: "#ffffff",
      black: "#1c1c1c",
      gray: "#808080",
      lightGray: "#F9FAFC",
      border: "#e2e2e2",
      red: "#ff1a1a",
      blue: "#2F80ED",
      yellow: "#F4B618",
      green: "#219653",
      success: "#219653",
      error: "#EB5757",
    },

    container: {
      center: true,
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1496px",
      },
    },
  },

  plugins: [],
};
