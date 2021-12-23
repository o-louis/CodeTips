const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./components/**/*.js', './pages/**/*.js'],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    // eslint-disable-next-line no-undef
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
