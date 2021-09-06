const colors = require('./constants/config/tailwind.css/colors.js')
// const thêmcolors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: colors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
