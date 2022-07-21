/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'base-color':'#0E6D7B',
        'nav-base-color':'#BFAA00',
        'cyan-base': '#66BCF4',
        'brown-base': '#8F8642',
        'nav-base':'#F2B429',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
