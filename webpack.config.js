const path = require('path');

const rules = [
  {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
    },
  },
];

module.exports = [
  {
    entry: path.join(__dirname, 'src', 'web', 'index.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      library: 'losen',
      libraryTarget: 'commonjs2',
    },
    externals: {
      react: true,
      'react-dom': true,
      redux: true,
      'react-redux': true,
      'styled-components': true,
    },
    module: { rules },
  },
  {
    target: 'node',
    entry: {
      cli: path.join(__dirname, 'src', 'cli', 'index.js'),
      validate: path.join(__dirname, 'src', 'cli', 'validate.js'),
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
    },
    module: { rules },
  },
];
