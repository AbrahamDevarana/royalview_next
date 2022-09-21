const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
  plugins: [
    {
        tailwindcss: {},
        autoprefixer: {}
    },
      purgecss({
        content: [
            './pages/**/*.{js,jsx,ts,tsx}',
            './components/**/*.{js,jsx,ts,tsx}'
        ],
      })
  ]
}
