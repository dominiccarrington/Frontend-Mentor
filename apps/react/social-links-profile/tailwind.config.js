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
        serif: [
          'Inter',
          ...require('tailwindcss/defaultTheme').fontFamily.serif,
        ],
      },
      colors: {
        primary: {
          green: '#c5f82a',
        },
        neutral: {
          white: '#ffffff',
          gray: '#333333',
          'dark-gray': '#1f1f1f',
          'off-black': '#141414',
        },
      },
    },
  },
  plugins: [],
};
