/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel-font': ['Pixelify Sans', 'sans-serif'],
        'rubik-font':['Rubik', 'sans-serif']
      },
      backgroundImage:{
        'gamebg':"url('/game_event.jpg')",
      }
    },
  },
  plugins: [require("daisyui"),require('flowbite/plugin')],
}