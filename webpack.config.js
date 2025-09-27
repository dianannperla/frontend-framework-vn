const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    filename: `bundle-${new Date().getTime()}.js`,
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};