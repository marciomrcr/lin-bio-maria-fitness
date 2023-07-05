/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        cel: "360px",
      },
      backgroundImage: {
        "banner-hero": "url('/banner.jpg')",
      },
    },
  },
  variants: {},
  plugins: [],
};
