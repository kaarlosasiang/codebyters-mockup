/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        heroIMG: "url(src/assets/img/heroBG.jpeg)",
      },
      colors: {
        "codebyters-teal": "#0bdabc",
        "codebyters-lightteal": "#75d8ca",
        "heading-color": "#444444"
      },
    },
  },
  plugins: [],
};
