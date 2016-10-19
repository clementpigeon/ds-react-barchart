import baseConfig from "./webpack.dev.config.babel";

const config = {
  ...baseConfig,

  module: {
    ...baseConfig.module,
    noParse: [
      /\/sinon\.js/
    ]
  },

  externals: {
    "react/lib/ExecutionEnvironment": true,
    "react/lib/ReactContext": true,
    "react/addons": true
  },

  resolve: {
    ...baseConfig.resolve,
    alias: {
      ...baseConfig.resolve.alias,
      sinon: "sinon/pkg/sinon"
    }
  }
};

export default config;