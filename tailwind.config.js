/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0097a7",
        secondary: "#eeff04",
        dark: "#161616",
        footerCard: "#d7d7d7",
      },
    },
  },
  plugins: [],
};
