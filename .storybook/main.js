const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.jsx'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // Return the altered config
    return config;
  },
}
