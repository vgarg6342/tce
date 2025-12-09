const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;