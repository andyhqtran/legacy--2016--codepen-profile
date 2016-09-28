/**
 * External dependencies
 */
import path from 'path';
import webpack from 'webpack';

/**
 * Local variables
 */
const PATHS = {
  app: path.join(__dirname, 'client/index.js'),
  build: path.join(__dirname, 'public'),
};

/**
 * Webpack config
 */
const config = {
  entry: [
    'webpack-hot-middleware/client',
    PATHS.app,
  ],
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.(sass|scss)$/i,
        exclude: /node_modules/,
        loader: 'style!css?sourceMap!sass?sourceMap',
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};

export default config;
