/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#f9cdcd',
        'primary-white': '#f4f4f4',
        'primary-black': '#252422',
      },
      fontFamily: {
        'work-sans': ['Work Sans', 'sans-serif'],
      },
      fontSize: {
        xxs: '.65rem',
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *')
      addVariant('child-hover', '& > *:hover')
    },
    require('tailwind-scrollbar'),
  ],
}
