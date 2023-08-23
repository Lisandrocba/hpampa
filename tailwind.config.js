/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite/**/*.js",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'contenedor': "url('/public/conten')",
        'contenedor2': "url('/public/conten2.jpg')",
      },
      colors: {
        'blanco': '#fff',
        'negro': '#000',
        'hpampa': '#66add4',
        'dark': '#1e293b',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#5d89ca',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#D3FFFF',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      fontSize: {
        ssm: ['10px', '14px'],
      },
      extend: {
        spacing: {
          '8xl': '96rem',
          '9xl': '128rem',
        },
        borderRadius: {
          '4xl': '2rem',
        }
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}
