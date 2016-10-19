import webpackConfig from "./webpack.test.config.babel";
import {argv} from "yargs";

const singleRun = argv.singleRun ? true : false;

export default (config) => {
  config.set({
    browsers: ["Chrome"],
    files: [
      "tests/test.bundle.js"
    ],
    frameworks: ["mocha"],
    plugins: [
      "karma-babel-preprocessor",
      "karma-chai",
      "karma-chrome-launcher",
      "karma-coverage",
      "karma-mocha",
      "karma-mocha-reporter",
      "karma-sourcemap-loader",
      "karma-webpack"
    ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      "tests/test.bundle.js": ["webpack", "sourcemap"]
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: false
    },

    reporters: ["coverage", "mocha"],
    coverageReporter: {
      dir: "coverage",
      reporters: [
        {type: "lcov", subdir: "reports"},
        {type: "cobertura", subdir: "reports"}
      ]
    },

    singleRun: singleRun
  });
};