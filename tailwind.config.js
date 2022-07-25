/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/*.html"],
  theme: {
    darkMode:'class',
    fontFamily: {
      montserrat: ["Montserrat"],
      edu:['Edu NSW ACT Foundation']
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class'
};
