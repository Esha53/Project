/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        primary:"#ff8901",
        seconday:"#fb923c",
      },
    },
  },
  plugins: [],
}

