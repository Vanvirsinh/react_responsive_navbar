/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInOut: {
          '0%': {
            opacity: 0,
            visibility: 'hidden',
            transform: 'translateY(-20px)'
          },
          '50%': {
            opacity: 0.9,
            visibility: 'visible',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: 1,
            visibility: 'visible',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        slideInOut: 'slideInOut 0.5s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

