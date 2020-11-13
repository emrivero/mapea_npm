const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './index.js',
  node: { fs: 'empty' },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
      exclude: [/node_modules\/(?!mapea-prueba)/],
    }, {
      test: [/\.hbs$/, /\.html$/],
      loader: 'html-loader',
      exclude: [/node_modules\/(?!mapea-prueba)/],
    }, {
      test: /\.(woff|woff2|eot|ttf|svg|jpg)$/,
      exclude: [/node_modules\/(?!mapea-prueba)/],
      loader: 'url-loader?name=fonts/[name].[ext]',
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    open: true,
    hot: true,
    watchOptions: {
      poll: 1000,
    },
  },
  devtool: 'eval-source-map',
};
