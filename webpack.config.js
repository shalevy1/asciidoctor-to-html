const { resolve, join } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const publicPath = process.env.NODE_ENV === 'gh-pages' ? '/asciidoctor-blog/' : '/';

process.env.NODE_ENV = publicPath.startsWith('dev') ? 'development' : 'production';

module.exports = {
  //entry: './app/web/main.js',
  entry: {
    'babel-polyfill': 'babel-polyfill',
    asciidoctor: 'asciidoctor.js',
    styles: './app/web/styles.js',
    main: './app/web/main.js',
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath,
  },
  resolve: {
    modules: [
      resolve(__dirname, 'node_modules'),
    ],
  },
  mode: process.env.NODE_ENV || 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'app', 'web', 'index.html'),
      favicon: join(__dirname, 'app', 'web', 'favicon.ico'),
    }),
    new BaseHrefWebpackPlugin({
      baseHref: publicPath,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
        include: [
          join(__dirname, 'node_modules', 'asciidoctor.js'),
          join(__dirname, 'app', 'web'),
        ],
      },
      {
        test: /\.adoc$/i,
        use: [
          { loader: "raw-loader" },
        ],
        include: [
          join(__dirname, 'app', 'adoc'),
        ],
      },
    ],
  },
  node: {
    fs: 'empty',
    'child_process': 'empty',
    // console: false,
    // net: 'empty',
    // tls: 'empty',
  }
};
