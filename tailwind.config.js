/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,ts}", ],
  theme: {
    extend: {
      colors: {
        cultured: "#F3F5F1",
        eggshell: "#FAECE9",
        "laurel-green": "#A1B49D",
        "forestGreen-traditional": "#174426",
        "desert-sand": "#DDBFA0",
        "dark-lava": "#4A3F30",
      },
      fontFamily: {
        purellis: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
