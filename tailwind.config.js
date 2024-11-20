/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ['Montserrat', 'sans-serif'],
        merriweather: ['Merriweather', 'sans-serif'],
        cardo: ['Cardo', 'sans-serif'],
        inter: ['Inter', 'sans-serif']

      },
      colors:{
        "white":"#ffffff",
        "primary":"#fefefe",
        "secondary":"#373737",
        "accent":"#ADBDB2",
        "navdark":"#3C424A",
        "nav": "rgba(34, 34, 34, 0.7)",

      },
     
    },
  },
  plugins: [],
}