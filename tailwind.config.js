/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: '#003087',
          dark: '#001a4d',
          light: '#004db3',
        },
        orange: {
          brand: '#FF6200',
        },
      },
    },
  },
  plugins: [],
};
