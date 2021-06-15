const path = require('path');

module.exports = {

  // Info
  entry: path.resolve(__dirname, 'src', 'index.jsx'), // ./src/index.js
  output: {
    path: path.resolve(__dirname, 'dist'), // ./dist
    filename: 'main.js',
  },

  // Development purposes
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // ./dist
    open: true,
    hot: true,
    port: 8080, // Can be altered
    clientLogLevel: 'silent',
  },

  // Loaders
  module: {
    rules: [

      // Babel -- Compiler for .js .jsx .ts .tsx
      {
        test: /\.(jsx|js|ts|tsx)$/,
        include: path.resolve(__dirname, 'src'), // ./src
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      // Sass -- Compiler for .scss and .sass
      {
        test: /\.s[ac]ss$/i,
        include: path.resolve(__dirname, 'src'), // ./src
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      
    ]
  }
};