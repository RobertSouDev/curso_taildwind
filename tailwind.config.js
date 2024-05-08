/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './build/*.html'
  ],
  theme: {
    extend: {
      fontSize: {
        'normal':'14px',
        'titulo':'32px'
      },
      padding: {
        'tipo1':'5px',
        'tipo2':'15px',
        'tipo3':'30px',
        'tipo4':'60px'
      }
    },
  },
  plugins: [],
}

