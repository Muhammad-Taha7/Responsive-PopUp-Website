/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
