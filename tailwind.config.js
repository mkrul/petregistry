/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/views/**/*.{html,html.erb,erb}',
    './app/javascript/components/**/*.js',
  ],
  daisyui: {
    themes: ["nord"],
  },
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      'sans': ["BlinkMacSystemFont", "Avenir Next", "Avenir",
        "Nimbus Sans L", "Roboto", "Noto Sans", "Segoe UI", "Arial", "Helvetica",
        "Helvetica Neue", "sans-serif"],
      'mono': ["Consolas", "Menlo", "Monaco", "Andale Mono", "Ubuntu Mono", "monospace"]
    },
    extend: {
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
  ],
}