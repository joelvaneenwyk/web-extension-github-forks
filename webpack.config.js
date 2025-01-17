"use strict";
const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    active_forks: "./dist/active-forks.js",
  options: "./dist/options/options.js",
  background: "./dist/background.js",
},
  output: {
  filename: "bundles/[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
module: {
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      // enforce: "pre",
    },
  ],
  },
};
