const path = require('path');

module.exports = {
  entry: {
    bundle: path.join(__dirname, 'src', 'index.js'),
    cli: path.join(__dirname, 'src', 'cli.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
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
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
