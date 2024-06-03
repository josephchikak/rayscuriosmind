/** @type {import('tailwindcss').Config} */
import react from '@vitejs/plugin-react'


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        'primary' : '#E24E1B',
        'secondary': '#3A6EA5',
        'background': '#070600'
    },
    fontFamily: {
      'entryFont': ["adobe-garamond-pro", 'serif'],
      'gord' : ['Gord', 'serif'],
      'thunder' : ['thunder', 'serif']
    },
    extend: {},
  },
  plugins: [],
}