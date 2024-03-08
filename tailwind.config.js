/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      spacing: {
        // w-360 h-800
        360: "22.5rem",
        800: "50rem",
      },
      backgroundImage: {
        // bg-InGame
        InGame: "url('../public/images/BackgroundImg/bgImg.png')",
      },
    },
  },
  plugins: [],
};
