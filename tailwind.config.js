module.exports = {
  purge: ["./**/*.{jsx,tsx}", "./styles/**.css"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      serif: ["Raleway", "sans-serif"],
      sans: ["Open Sans"],
    },
  },
  variants: {
    extend: {
      borderWidth: ["dark"],
      borderOpacity: ["dark"],
    },
  },
  plugins: [],
};
