/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
     "!../../node_modules/**",
   
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
