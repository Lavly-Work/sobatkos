/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "violet-1000": "#341A55",
      },
      animation: {
        "spin-slow": "spin 3s linear 1",
      },
    },
  },
  plugins: [],
};
