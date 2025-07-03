/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        philosopher: ['Philosopher', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
        source: ['"Source Sans Pro"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

