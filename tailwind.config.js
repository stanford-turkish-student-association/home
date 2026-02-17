/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        turkish: {
          red: '#E30A17',
          darkred: '#B80710',
          light: '#FEF2F2',
        },
      },
    },
  },
  plugins: [],
}
