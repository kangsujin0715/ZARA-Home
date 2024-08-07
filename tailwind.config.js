/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      palette : {
        primary : { main : 'FF6B6B'}
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
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
        '.main-search-btn': {
          'width': '24px',
          'height': '24px',
          'background': 'url(../public/images/icon/search.svg) no-repeat center',
        },
        '.main-img': {
          'width': '100%',
          'height': '700px',
        },
        '.heart-btn' : {
          'position': 'absolute',
          'top': 0,
          'right': 0,
          'width': '48px',
          'height': '48px',
          'background': 'url(../public/images/icon/r-heart.svg) no-repeat center',
          'z-index': '3',
        },
        '.heart-full-btn' : {
          'position': 'absolute',
          'top': 0,
          'right': 0,
          'width': '48px',
          'height': '48px',
          'background': 'url(../public/images/icon/r-heart-full.svg) no-repeat center',
          'z-index': '3',
        },
        '.plus-btn' : {
          'position': 'absolute',
          'top': 0,
          'left': 0,
          'width': '48px',
          'height': '48px',
          'background': 'url(../public/images/icon/w-plus.svg) no-repeat center',
          'z-index': '3',
        },
        '.close-btn' : {
          'width': '48px',
          'height': '48px',
          'background': 'url(../public/images/icon/b-close.svg) no-repeat center',
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