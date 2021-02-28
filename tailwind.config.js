// tailwind.config.js
module.exports = {
  purge: [
    '/**/jsx/**/*.js',//apps js or jsx
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