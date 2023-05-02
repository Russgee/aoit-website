/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["themes/apollo/content/**/*.md", "themes/apollo/layouts/**/*.html", "themes/apollo/assets/script.js"],
  theme: {
    extend: {
      colors: {
        aoit: {
          200: '#DBF3F3',
          300: '#65C2C2',
          400: '#3E8582',
          500: '#225E59',
          700: '#0A1C1A'
        }
      }
    },
  },
  plugins: [],
};