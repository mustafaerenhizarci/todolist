/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/*.html"],
  theme: {
    darkMode:'class',
    fontFamily: {
      montserrat: ["Montserrat"],
      roboto:['Roboto']
    },
    extend: {},
  },
  plugins: [],
  darkMode: 'class'
};
