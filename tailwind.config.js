/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary : { main : '#FF6B6B'}
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '*' : {
          'caret-color': 'transparent',
          },
        '.main-title': {
          'margin': '130px 0',
          'text-align': 'center',
          'font-weight': '700',
        },
        '.main-search': {
          'width': '343px',
          'border-bottom': '1px solid #fff',
          'background': 'transparent',
          'padding': '4px 16px 4px',
          'font-size': '12px',
          'color': '#fff',
          '&::placeholder': {
            'color': '#fff',
          },
          '&:focus': {
            'outline': 'none',
          },
        },
        '.main-img': {
          'width': '100%',
          'height': '700px',
        },
        '.md-btn' : {
          'padding': '0 36px',
          'height': '48px',
          'font-size': '16px',
        },
        '.full-btn' : {
          'width': '100%',
          'height': '48px',
        }
      }
      
      addUtilities(newUtilities, ['responsive', 'hover', 'focus'])
    }
  ]
}