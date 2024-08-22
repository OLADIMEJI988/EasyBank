/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      mobile: "350px",
      xl: "1200px",
      md: "765px",
    },
    extend: {
      fontFamily: {
        'Noto': ["Noto Serif Display", "serif"],
      },
      backgroundImage:{
        'dinning': "url('/image(8).png'),"
      },
    },
  },
  plugins: [],
}

