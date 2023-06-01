/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    clipPath: {
      triangle: 'polygon(50% 0%, 34% 30%, 66% 31%);',
      card: 'circle(64.3% at 50% 50%);',
      arrow: 'polygon(0 0, 100% 0, 100% 50%, 100% 72%, 0 51%);',
      arrow_invert: 'polygon(0 100%, 100% 100%, 100% 57%, 100% 72%, 0 18%);'

    },
    extend: {
      colors: {
        'testimony-background-primary': 'rgb(241,240,238)',
        'font-color-light': 'rgba(22,22,22,.65)',
        'font-color': '#161616',
        'border-color': '#f2f6ff',
        'primary-color': '#ffc700',
        'primary-white-opaq': 'rgba(215,101,158, 0.5)'
      },
      boxShadow: {
        'low': '0 10px 20px rgba(0, 0, 0, .04), 0 2px 6px rgba(0, 0, 0, .04)'
      },
      fontFamily: {
        'roboto': ['Roboto', 'ui-sans-serif', 'system-ui'],
        'geo': ['Geologica', 'sans-serif', 'ui-sans-serif', 'system-ui']
      
      }
    },
  },
  plugins: [
    require('tailwind-clip-path'),
  ],
}

