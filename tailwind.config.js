/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#3e8e39",
        primary: "#156937",
        secondary: "#c8dd68",
      },
      fontFamily: {
        main: "Magic Retro",
      },
    },
  },
  plugins: [],
};
