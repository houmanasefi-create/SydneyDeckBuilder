/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0E4D92",
          dark: "#0B3A6B",
          light: "#E6F0FA",
          accent: "#FFB703"
        }
      }
    },
  },
  plugins: [],
};
