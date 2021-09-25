const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      gray: colors.trueGray,
      rose: colors.rose,
      red: colors.red,
      'warm-gray': colors.warmGray,
      coolGray: colors.coolGray,
      mauve: '#514046',
      mauveLight: '#B9755E',
      teal: colors.teal,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
