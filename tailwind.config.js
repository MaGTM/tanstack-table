/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "modal-overlay": "rgba(0, 0, 0, 0.5)",
        "primary": "#053EFF",
        "placeholder": "#00000066",
        "black-70": "rgba(0, 0, 0, 0.7)",

        "error": "#E31D1D"
      },
      fontSize: {
        'heading-1': '1.38889rem',
        'heading-2': '1.18056rem',
        'small': '0.83333rem',
        'xs': '0.69444rem'
      },
      boxShadow: {
        'basic': '0px 0px 8px 0px rgba(209, 217, 230, 0.70)'
      },
      borderWidth: {
        "basic": "0.02rem"
      }
    },
  },
  plugins: [],
}

