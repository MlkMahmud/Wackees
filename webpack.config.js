const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJs = require('uglifyjs-webpack-plugin');
const ScriptExt = require('script-ext-html-webpack-plugin');

module.exports = {
  devServer: {
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
  entry: './client/src',
  output: {
    path: path.resolve(__dirname, 'client', 'dist'),
    filename: 'static/js/[name].[chunkhash].js',
    publicPath: '/',
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new UglifyJs({
        extractComments: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/images',
            },
          },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'static/fonts',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'client', 'public', 'index.html'),
      minify: true,
    }),

    new ScriptExt({
      defaultAttribute: 'defer',
    }),

    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
};
