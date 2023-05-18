/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["themes/apollo/content/**/*.md", "themes/apollo/layouts/**/*.html", "themes/apollo/assets/script.js"],
  theme: {
    extend: {
      colors: {
        aoit: {
          50: '#F8FFFF',
          75: '#E5F8F7',
          100: '#DCFAFA',
          200: '#DBF3F3',
          300: '#65C2C2',
          400: '#3E8582',
          500: '#225E59',
          700: '#0A1C1A',
          900: '#1f4240'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
};