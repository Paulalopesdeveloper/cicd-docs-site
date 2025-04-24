module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        base: '0.875rem',
      },
      colors: {
        pokeYellow: '#FFCC01',
        pokeRed: '#EA1A25',
        pokeBlue: '#2A75BB',
        darkBg: '#1a1a1a',
      },
    },
  },
  plugins: [],
};
