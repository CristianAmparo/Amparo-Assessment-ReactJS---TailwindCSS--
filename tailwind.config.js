/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002C59',
        secondary: '#5C6061',
      },
      fontFamily: {
        Comfortaa: ['Comfortaa'],
        Montserrat: ['Montserrat'],
        Poppins: ['Poppins'],

      }
    },
  },
  plugins: [],
}