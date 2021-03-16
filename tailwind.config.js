module.exports = {
  purge: ['./**/*.{jsx,tsx}', './styles/**.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Raleway', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
