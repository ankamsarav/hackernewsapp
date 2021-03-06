const path = require('path');
const nodeExternal = require('webpack-node-externals');

const config = {
  target: 'node',
  mode: 'development',
  entry: {
    server: ['./src/server.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.css']
  },
  externals: [nodeExternal()]
};

module.exports = config;
