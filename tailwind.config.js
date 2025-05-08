/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    daisyui,
  ],
};

export default config;