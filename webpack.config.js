const path = require('path');

module.exports = {
  entry: './src/app.js', // Entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), //Output folder
    clean: true,
  },
  devServer: {
    static: './dist',
    port: 8080,
    open: true,
  },
  mode: 'development',
};