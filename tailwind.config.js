/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          950: '#02121e',
          900: '#041c2c',
          850: '#07273d',
          800: '#0a3551',
          700: '#0e4a70',
          600: '#146394',
          500: '#1c82bf',
          400: '#38a4e0',
          300: '#6dc3f0',
        },
        coral: {
          400: '#ff7b54',
          500: '#f05a28',
          600: '#de4313',
          700: '#c13207',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-coral': '0 0 25px -3px rgba(240, 90, 40, 0.45)',
        'glow-cyan': '0 0 25px -3px rgba(56, 164, 224, 0.35)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
}
