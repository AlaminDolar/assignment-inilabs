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
          accent: "#5BB5A2",
          neutral: "#53A191",

          warning: "#E3C79E",

          error: "#D6AE7B",
          info: "#485563",
          success: "#29323C",

          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
}
