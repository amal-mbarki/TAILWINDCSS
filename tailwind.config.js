/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto:"Roboto"
      },
      backgroundImage: {
      "BG": "url(' ./src/amal.jpg')"
      }
    },
  },
  plugins: [],
}

