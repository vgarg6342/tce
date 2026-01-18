/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./component/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation:{
        roll: "roll 24s linear infinite",
        fadeIn: 'fadeIn 0.3s ease-out',
      },
      colors: {
        accent: "#7B00D3",
      },
      keyframes:{
        roll:{
          "0%": {transform: "translateX(100%)"},
          "100%": {transform: "translateX(-100%)"}
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      screens:{
        sxl: "1180px",
        // @media (min-width: 1180px){...}
        xs: "480px"
        // @media (min-width: 480px){...}
      }
    },
  },
  
  plugins: [],
}

