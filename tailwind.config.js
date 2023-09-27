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
        'main-blue': '#35A1F4',
        'background-light-blue' : '#EEF5F9',
        'text-gray' : '#B6C1CE',
        'text-black' : '#181818',
        'shadow-black' : 'rgba(24,24,24,0.05)',
        'message-wrong' : '#FF406E'
      },
      fontFamily : {
        sans : ['Gilroy', 'sans-serif']
      }
    },
  },
  plugins: [],
}

