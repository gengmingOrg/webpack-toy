const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js', //它决定 non-entry chunk(非入口 chunk) 的名称
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出'
    }),
  ],
};