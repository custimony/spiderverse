/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'testimony-background-primary': 'rgb(241,240,238)',
        'font-color-light': 'rgba(22,22,22,.65)',
        'font-color': '#161616',
        'border-color': '#f2f6ff',
      },
      boxShadow: {
        'low': '0 10px 20px rgba(0, 0, 0, .04), 0 2px 6px rgba(0, 0, 0, .04)'
      }
    },
  },
  plugins: [],
}

