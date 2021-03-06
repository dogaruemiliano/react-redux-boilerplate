const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// root path for this project
const ROOT = __dirname;

module.exports = {
  entry: {
    main: './src/index.jsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(ROOT, './index.html'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: 'file-loader',
      },
    ],
  },
};
