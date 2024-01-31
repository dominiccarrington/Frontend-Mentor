const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'index.html'),
    join(__dirname, 'src/**/*.{js,jsx,tsx,ts}'),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Outfit',
          ...require('tailwindcss/defaultTheme').fontFamily.sans,
        ],
      },
      colors: {
        white: '#ffffff',
        'light-gray': '#d6e2f0',
        'grayish-blue': '#7b879d',
        'dark-blue': '#1f3251',
      },
    },
  },
  plugins: [],
};
