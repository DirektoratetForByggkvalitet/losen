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
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'bundle.js',
      library: 'dibk-wizard-framework',
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
    entry: path.join(__dirname, 'src', 'cli.js'),
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'cli.js',
    },
    module: { rules },
  },
];
