const path = require('path');

module.exports = {
  entry: [path.join(__dirname, 'src', 'index.js')],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'dibk-wizard-framework',
    libraryTarget: 'commonjs2',
  },
  externals: {
    react: true,
    'react-dom': true,
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
