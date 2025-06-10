/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: "#FFD1DC",
        gold: "#FFD700",
        rosy: "#FF6F91",
      },
      fontFamily: {
        romantic: ['"Great Vibes"', "cursive"],
        modern: ['"Poppins"', "sans-serif"],
        serif: ['"Playfair Display"', "serif"],
      },
      backgroundImage: {
        "parallax-hearts": "url('/images/hearts-bg.png')",
      },
    },
  },
  plugins: [],
};
