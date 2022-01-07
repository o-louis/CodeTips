/* eslint-disable no-undef */
const plugins = {
  'postcss-import': {},
  'tailwindcss': {},
  'autoprefixer': {},
};

if (process.env.NODE_ENV === 'production') {
  plugins['@fullhuman/postcss-purgecss'] = {
    content: [
      'pages/**/*.jsx',
      'components/**/*.jsx',
    ],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
  };

  plugins['cssnano'] = {
    preset: ['default', {
      discardComments: {
        removeAll: true,
      },
    }],
  };
}

module.exports = {
  plugins,
};