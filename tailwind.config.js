const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: [
      "./src/**/*.{html,js}",
    ],
    //enabled: production // disable purge in dev
  },
  theme: {
    colors,
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
