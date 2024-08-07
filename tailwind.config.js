/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '24': '50px',
        '114': '8rem',
        '128': '10rem',
        '144': '36rem', 
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
      },
      animation: {
        'bounce-infinite': 'bounce 5s infinite',
      },
    },
  },
  plugins: [],
}


// fontFamily:{
//   sans: ['Roboto', 'sans-serif']
// },