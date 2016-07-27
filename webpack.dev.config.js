/* eslint-env node */

const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CleanPlugin = require("clean-webpack-plugin")

/* Webpack configuration for development */

const SRC_DIR = path.join(__dirname, "frontend")
const DEST_DIR = path.join(__dirname, "public", "assets")

module.exports = {
  entry: {
    application: path.join(SRC_DIR, "application.js")
  },

  output: {
    path: DEST_DIR,
    filename: "[name].js"
  },

  devServer: {
    contentBase: DEST_DIR,
    port: 3001
  },

  devtool: "cheap-module-source-map",

  module: {
    loaders: [

      // JavaScript
      {
        test: /\.js$/,
        loader: "babel",
        include: SRC_DIR
      },

      // Stylesheet
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", [
          "css",
          "sass"
        ]),
        include: SRC_DIR
      },

      // Fonts
      {
        test: /(\.woff2?|\.ttf|\.eot|\.svg)(\?.+)?$/,
        loader: "file",
        query: {
          name: "[name].[ext]"
        }
      },

      // Images (Currently images under subdirectories are not considered)
      {
        test: /\.png$|\.ico$|\.jpg$|\.gif$|\.svg$/,
        loader: "file",
        query: {
          name: "[name].[ext]"
        }
      }
    ]
  },

  plugins: [
    new CleanPlugin([DEST_DIR]),
    new ExtractTextPlugin("[name].css")
  ]
}
