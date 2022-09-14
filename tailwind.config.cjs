/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "re-d-mode": "#1b1b1b",
        "re-dh-mode": "#5c5a5a",
        "re-brown": "#494949",
        "re-gray": "#D9D9D9",
        "re-green": "#D9D849",
        "re-d-green": "#d3d333",
        "re-dd-green": "#d4d414",
        "re-white": "#F5F5F5",
      },
      fontFamily: {
        finlandica: ["Finlandica", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        fit: "fit-content",
      },
    },
  },
  plugins: [],
};
