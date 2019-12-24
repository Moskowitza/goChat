import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import htmlWebpackTemplate from 'html-webpack-template';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';

export default {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      template: htmlWebpackTemplate,
      filename: 'index.html',
      title: 'Go Chat',
      appMountId: ['app'],
      mobile: true
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};
