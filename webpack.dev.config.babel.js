import baseConfig from "./webpack.base.config.babel";

const host = "0.0.0.0";
const port = 9000;

const config = {
  ...baseConfig,

  module: {
    ...baseConfig.module,
    loaders: [
      ...baseConfig.module.loaders,
      {
        test: /(\.scss|\.css)$/,
        loaders: ["style", "css?sourceMap", "sass?sourceMap"]
      }
    ]
  },

  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://" + host + ":" + port,
    "webpack/hot/only-dev-server",
    __dirname + "/src/index.js"
  ],

  output: {
    path: __dirname + "/example/build",
    publicPath: "http://" + host + ":" + port + "/build/",
    filename: "bundle.js"
  },

  devServer: {
    host: host,
    port: port,
    contentBase: __dirname + "/example/"
  }

};


export default config;
