import path from 'path';
import webpack from 'webpack';
import precss from 'precss';
import autoprefixer from 'autoprefixer';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'public'),
};

const config = {
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.(jpg|png)$/,
        loader: 'file?name=assets/img/[name].[ext]',
      },
      {
        test: /\.svg$/,
        loader: 'raw',
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss!sass'),
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new CleanWebpackPlugin(['dist', 'build'], {
      root: __dirname,
      verbose: true,
      dry: false,
    }),
    new ExtractTextPlugin('bundle.css', {
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 }),
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 }),
  ],
  postcss: () => [precss, autoprefixer],
};

export default config;
