/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        'primary' : '#E57225',
        'secondary': '#3A6EA5',
        'background': '#070600',
        'text': '#f8f4e3'
    },
    fontFamily: {
      'entryFont': ["adobe-garamond-pro", 'serif'],
      'gord' : ['Gord', 'serif'],
      'thunder' : ['thunder', 'serif'],
      'poppins' :['poppins', 'san-serif'],
      'inter': ['inter', 'san-serif'],
      'basis': ['basis'],
      'nudica': ['nudica-mono'],
      'blackbird': ['blackbird']
      
    },
    extend: {
 
    },
  },
  plugins: [],
}
