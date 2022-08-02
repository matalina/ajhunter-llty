module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      fontFamily: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', 'sans-serif']
    },
  },
  plugins: [],
};

const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    fontFamily: {
      body: ['Doris','ui-sans-serif','system-ui'],
      heading: ['Permanent Marker','ui-sans-serif','system-ui'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
}
