/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        // bg-InGame
        InGame: "url('../public/images/BackgroundImg/bgImg.png')",
      },
    },
  },
  plugins: [],
};
