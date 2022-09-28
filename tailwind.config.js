/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#5BB5A2",
          secondary: "#E8F2EE",
          accent: "#3A4256",
          neutral: "#DFEAF1",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}