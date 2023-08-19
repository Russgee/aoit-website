/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["content/**/*.md", "themes/apollo/layouts/**/*.html", "themes/apollo/assets/script.js", "config/**"],
  theme: {
    extend: {
      colors: {
        aoit: {
          50: '#F8FFFF',
          75: '#E5F8F7',
          100: '#DCFAFA',
          200: '#DBF3F3',
          300: '#65C2C2',
          400: '#13605D',
          500: '#1E4343',
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