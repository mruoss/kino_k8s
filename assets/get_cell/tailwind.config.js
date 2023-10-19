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
      backgroundImage: {
        "caret-down":
          'url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik01Ljk5OTg5IDQuOTc2NzFMMTAuMTI0OSAwLjg1MTcwOEwxMS4zMDMyIDIuMDMwMDRMNS45OTk4OSA3LjMzMzM3TDAuNjk2NTU1IDIuMDMwMDRMMS44NzQ4OSAwLjg1MTcwOEw1Ljk5OTg5IDQuOTc2NzFaIiBmaWxsPSIjNjE3NThBIi8+Cjwvc3ZnPgo=")',
      },
    },
  },
  plugins: [],
};
