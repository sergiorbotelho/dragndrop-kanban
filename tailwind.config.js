/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBackGroundColor: "#0D1117",
        columnBackgroundColor: "#161c22",
      },
    },
  },
  plugins: [],
};
