/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html"
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#ee8313',
        'black': '#000000',
        'white': '#ffffff',
        'gray': '#343434'
      },
      fontFamily: {
        'primary': 'Be Vietnam Pro, sans-serif',
        'manrope': 'Manrope, sans-serif'
      },
      backgroundImage: {
        'car': 'url("/src/images/car.png")',
        'discover': 'url("/src/images/discover.png")'
      }
    },
    screens: {
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
}

