/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#00265B',
          blue: '#0047AB',
          sky: '#3BAAFF',
          accent: '#0284c7',
          light: '#EEF4FF',
          dark: '#0B132B'
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
