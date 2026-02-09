/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f4',
          100: '#e8ebe3',
          200: '#d2d8c8',
          300: '#b3bea3',
          400: '#95a37e',
          500: '#788963',
          600: '#5e6d4d',
          700: '#4a563e',
          800: '#3d4634',
          900: '#343b2e',
        },
        sand: {
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e6ddd0',
          300: '#d5c7b2',
          400: '#c2ab90',
          500: '#b49778',
          600: '#a7866a',
          700: '#8b6d58',
          800: '#725a4b',
          900: '#5e4b3f',
        },
        ocean: {
          50: '#f0f7f7',
          100: '#d9ecec',
          200: '#b6d9da',
          300: '#8bbfc1',
          400: '#5fa0a4',
          500: '#458489',
          600: '#3a6b71',
          700: '#33575c',
          800: '#2e484d',
          900: '#293d41',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
