const path = require('path');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');

const dist = path.resolve(__dirname, 'dist');

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: dist,
    filename: "index.js",
  },
  plugins: [
    new WasmPackPlugin({
      crateDirectory: __dirname,
    })
  ]
};