/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#7ca98e",
        accent: "#bacf3e",
      },
      fontFamily: {
        NunitoSans: "'Nunito Sans', sans-serif",
      },
      animation: {
        fade: "fade 1s ease-in-out",
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: "0",
            scale: "0.9",
          },
          "100%": {
            opacity: "1",
            scale: "1",
          },
        },
      },
    },
  },

  plugins: [],
};
