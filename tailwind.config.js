/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Porsche Next"'],
      },
      keyframes: {
        fade: {
          "0%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        wave: "fade 1s ease-in 1",
      },
    },
    plugins: [],
  },
};
