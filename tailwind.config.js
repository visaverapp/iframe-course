module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif']
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'dark-blue': '#1F2D3D',
      'black': '#161818',
      'indigo': '#273444',
      'white': '#FFFFFF',
      'green-active': '#00B856',
      'white-hover': '#F4F4F4',
      'white-active': '#D3DCE6',
      'milk-white': '#E5E9F2',
      'lite-green': '#009E5A',
      'green-hover': '#2EDB8A',
      'green-disabled': '#50AE7C',
      'dark-gray': '#3C4858',
      'light-gray': '#8492A6',
      'gray': '#494952',
      'white-disabled': '#E5E9F2',
      'white-default': '#ACB5B8',
      'gray-default': '#8391A5',
      'lite-gray': '#D1DBE5',
    },
    extend: {},
  },
  plugins: [],
}