module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'

  theme: {
    extend: {
      colors: {
        blue: {
          DEFAULT: '#0e36a2',
          10: '#F9FAFC',
          15: '#F3F5F9',
          20: '#e3e5ea',
          25: '#d6dbea',
          200: '#9FB9DF',
          400: '#2B62B2',
          700: '#153769',
        },
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
}
