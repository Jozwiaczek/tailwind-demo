module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./src/**/*.html', './src/**/*.css'], // during build process its removing unused styles
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
