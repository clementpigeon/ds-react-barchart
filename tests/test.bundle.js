// Expose all tests scripts inside this directory
const testsContext = require.context(".", true, /.+\.spec.js$/);
testsContext.keys().forEach(testsContext);

// Expose all source codes inside lib directory
const componentsContext = require.context("../src/", true, /.+\.js$/);
componentsContext.keys().forEach(componentsContext);
