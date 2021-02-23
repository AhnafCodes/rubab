// tailwind.config.js
module.exports = {
  purge: [
    '/**/static/**/*.js',//apps html
    '/**/templates/**/*.html',//apps html
    './templates/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}