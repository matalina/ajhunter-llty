const tailwind = require('tailwindcss');
const autoprefixer = require('autoprefixer');
module.exports = {
  plugins: {
    tailwind: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },
};