/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f2f8fc',
          100: '#e1f0f8',
          200: '#cbe4f2',
          300: '#a7d1e8',
          400: '#7bb7da',
          500: '#5c9ec8', // Azul petróleo claro
          600: '#4783b2',
          700: '#396991', // Azul petróleo
          800: '#325878',
          900: '#2b4a64',
          950: '#1b3044', // Grafito oscuro
        },
        accent: {
          DEFAULT: '#00d4ff', // Cian brillante
          hover: '#00b8e6',
        }
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
