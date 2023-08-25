/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'xxs': '15rem'
      },
      boxShadow: {
        'top-xl': '0 -4px 6px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.15);'
      }
    },
  },
  plugins: [],
}