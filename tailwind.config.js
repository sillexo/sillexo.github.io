const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      // indigo: colors.indigo,
      // red: colors.rose,
      blue: colors.blue,
      // yellow: colors.amber,
      // primary: '#5c6ac4',
      // secondary: '#ecc94b',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
