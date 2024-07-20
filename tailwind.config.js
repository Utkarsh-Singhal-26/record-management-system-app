/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#161622",
        secondary: "#e8edf7",
        accent: "#bdc6e4",
      },
      fontFamily: {
        sregular: ["Sen-Regular", "sans-serif"],
        smedium: ["Sen-Medium", "sans-serif"],
        ssemibold: ["Sen-SemiBold", "sans-serif"],
        sbold: ["Sen-Bold", "sans-serif"],
        sextrabold: ["Sen-ExtraBold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
