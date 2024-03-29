/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        special: "2150px",
        pro: "1024px",
        specialTab: "1200px",
        specialTab2: "540px",
      },
      backgroundImage: {
        hero: "url('/assets/main_bg.jpg')",
      },
    },
  },
  plugins: [],
};
