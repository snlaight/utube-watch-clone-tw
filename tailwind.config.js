/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212121',
        secondary: '#181818',
        tertiary: '#303030',
        light: '#AAAAAA',
        'yt-red': '#CC0000',
      },
    },
  },
  plugins: [],
};
