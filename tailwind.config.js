/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'white' : '#FFFFFF',
        'background-blue': '#EEF5F9',
        'background-light-blue' : '#EEF5F9',
        'text-gray' : '#B6C1CE',
        'text-black' : '#181818',
      },
      fontFamily : {
        sans : ['Gilroy', 'sans-serif']
      }
    },
  },
  plugins: [],
}

