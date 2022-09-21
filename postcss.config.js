const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    {
        tailwindcss: {},
        autoprefixer: {}
    },
      purgecss({
        content: ['./**/*.html']
      })
  ]
}
