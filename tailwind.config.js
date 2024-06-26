/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./src/**/*.{vue,html,js}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem'
      }
    },
    extend: {
      colors: {
        primary: {
          100: '#06C2AE',
          200: '#02889B'
        },
        secondary: '#FF693A'
      }
    }
  },
  variants: {},
  plugins: []
}
