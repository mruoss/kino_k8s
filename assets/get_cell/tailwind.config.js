/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./assets/{get_cell,shared}/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        "gray-50": "#f8fafc",
        "gray-100": "#f0f5f9",
        "gray-200": "#e1e8f0",
        "gray-300": "#cad5e0",
        "gray-400": "#91a4b7",
        "gray-500": "#61758a",
        "gray-600": "#445668",
        "gray-800": "#1c2a3a",
        "yellow-100": "#fff7ec",
        "yellow-600": "#ffa83f",
        "blue-100": "#ecf0ff",
        "blue-600": "#3e64ff",
      },
    },
  },
  plugins: [],
};
