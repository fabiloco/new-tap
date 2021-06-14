

module.exports = {
  purge: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gruvbox-bg': '#282828',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
