import webpack from "webpack";
import ExtractTextPlugin from "extract-text-webpack-plugin";
import autoprefixer from "autoprefixer";

import baseConfig from "./webpack.base.config.babel";
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const config = {
  ...baseConfig,

  context: __dirname + "/src",

  entry: [
    "./index.js"
  ],

  output: {
    path: __dirname + "/dist",
    publicPath: "",
    filename: "lib.min.js",
    library: "lib",
    libraryTarget: "umd",
    umdNamedDefine: true
  },

  module: {
    ...baseConfig.module,
    loaders: [
      ...baseConfig.module.loaders,
      {
        test: /(\.scss|\.css)$/,
        loader: ExtractTextPlugin.extract("style", ["css?sourceMap", "postcss", "sass?sourceMap"])
      }
    ]
  },

  postcss: function() {
    return [autoprefixer];
  },

  plugins: [
    ...baseConfig.plugins,
    new ExtractTextPlugin(
      "styles.css",
      {
        allChunks: true
      }
    ),
    new UglifyJsPlugin({ minimize: true })
  ],

  externals: [
    ...baseConfig.externals,
    "react"
  ]
};

export default config;
