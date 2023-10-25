/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', '.public/index.html'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        borderRadius: ['hover'],
        gray: colors.trueGray,
      },
    },
  },
  plugins: [],
}