/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./global/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor:{
        customGradient:'radial-gradient(circle, rgba(2,150,209,1) 35%, rgba(167,56,249,1) 100%)'
      },

      colors: {
        primary: "#0296d1",
        primaryLight: "#5dcffc",
        primaryDark: "#035c80",
        secondary: "#a738f9",
        secondaryLight:'#dbabff',
        darkGray: "#333333",
        lightGray: "#f5f5f5",
      },
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1200px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "850px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "800px" },
      // => @media (max-width: 639px) { ... }
      mb: { max: "600px" },
    },
  },
  plugins: [],
};
