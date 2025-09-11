/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Use class-based dark mode
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        nieBlue: '#1E3A8A',
        pastelYellow: '#FFEB99',
        pastelOrange: '#FFD8A8',
      },
    },
  },
  plugins: [],
};
