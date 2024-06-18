/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        '2xl': '1500px', 
      },
      height: {
        '200': '200px', 
        '250': '250px', 
        '500': '500px', 
      },
      maxWidth: {
        '1300': '1300px',
      },
      fontSize: {
        'lg': '14px', 
        'xl': '16px',
        '1xl': '18px',
        '2xl': '22px',
        '3xl': '25px',
        '4xl': '2.3rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
      },
      colors: {
        primary: '#FFA500',
        secondary: '#FFFFFF',
        text: '#707070',
        background: '#F5F5F5',
        accent: '#4CAF50',
        darkAccent: '#333333',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      margin: {
        '15': '8rem',
      },
      width: {
        'fit': 'fit-content',
      },
    },
  },
  plugins: [],
}
