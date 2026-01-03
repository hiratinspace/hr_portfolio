/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'burgundy': {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f4a8b8',
          400: '#ec7591',
          500: '#e0486e',
          600: '#cc2c56',
          700: '#ac1f45',
          800: '#8f1d3f',
          900: '#7a1c3a',
          950: '#450a1a',
        },
      },
    },
  },
  plugins: [],
}