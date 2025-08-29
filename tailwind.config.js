/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
        inter: ['Inter', 'sans-serif'],
        amstel: ['AmstelvarAlpha', 'serif'],
        castoro: ['"Castoro Titling"', 'serif'],
        demofont: ["Playwrite MX Guides", 'cursive']
      },
    extend: {
      colors: {
        customGreen: "#005243",
      }
      
    },
  },
  plugins: [],
}