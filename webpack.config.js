const path = require('path');

module.exports = {
  entry: './src/app.js', // Entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), //Output folder
  },
  mode: 'development',
  watch: true,
};