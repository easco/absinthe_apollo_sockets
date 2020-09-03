
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, './assets/main.js'),
  output: {
    path: path.resolve(__dirname, 'priv/static'),
    filename: 'main.js'
  }
};