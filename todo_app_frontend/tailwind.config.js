/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class
  theme: {
    extend: {
      colors: {
        primary: "hsl(220, 98%, 61%)",
        VeryLightGrey: "#FAFAFA",
        VeryLightGreyishBlue: "#E4E5F1",
        LightGreyishBlue: "#D2D3DB",
        DarkGreyishBlue: "#9394A5",
        VeryDarkGreyishBlue: "#484B6A",
      },
    },
  },
};
