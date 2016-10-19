const config = {
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel",
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
      {
        test: /\.woff(\?.*)?$/,
        loader: "url?prefix=assets/fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.woff2(\?.*)?$/,
        loader: "url?prefix=assets/fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/font-woff2"
      },
      {
        test: /\.otf(\?.*)?$/,
        loader: "file?prefix=assets/fonts/&name=[path][name].[ext]&limit=10000&mimetype=font/opentype"
      },
      {
        test: /\.ttf(\?.*)?$/,
        loader: "url?prefix=assets/fonts/&name=[path][name].[ext]&limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?.*)?$/,
        loader: "file?prefix=assets/fonts/&name=[path][name].[ext]"
      },
      {
        test: /\.svg(\?.*)?$/,
        loader: "url?prefix=assets/fonts/&name=[path][name].[ext]&limit=10000&mimetype=image/svg+xml"
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "url?limit=1000&name=assets/[path][name].[ext]"
      },
      {
        test: /\.json$/, loader: "json"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".json"]
  },
  externals: [],
  plugins: []
};


export default config;
