/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: ["light", "dark"],
  },
  theme: {
    extend: {
      colors: {
        "white-100": "#F6F7FD",
        "purple-semi-dark": "#565BD9",
        "purple-dark": "#5754F7",
        "purple-light": "#8583FF",
        "purple-light-50": "#F6F7FD",
        "purple-light-100": "#EFEEFF",
        "purple-light-200": "#E6E5FF",
        "purple-light-300": "#C9C8F1",
        "purple-light-400": "#D0CFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
