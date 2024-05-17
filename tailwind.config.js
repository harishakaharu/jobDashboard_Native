/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-peach": "#FFE5B4", // Add your custom color here
        "pastel-green": "#C8E6C9", // Ensure this is included if you're using it
      },
    },
  },
  plugins: [],
};
