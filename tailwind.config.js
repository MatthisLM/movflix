/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brandYellow: '#e4d804',
        brandBlack: '#12151e',
        brandGrey : '#20212b',
      }
    },
  },
  plugins: [],
}

