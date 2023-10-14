/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*"],
  theme: {
    extend: {
      fontFamily:{
        display:['Overpass', 'sans-serif'],
      },
      colors:{
        'color1':'hsl(216, 12%, 8%)',
        'color2':'hsl(217, 12%, 63%)',
        'color3':'hsl(213, 19%, 18%)',
        'color4':'hsl(25, 97%, 53%)',
      },
    },
  },
  plugins: [],
}

