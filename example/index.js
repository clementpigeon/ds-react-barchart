import { AppContainer } from "react-hot-loader";

import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

import "./app.scss";

const container = document.getElementById("container");


ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  container
);

if (module.hot) {
  module.hot.accept("./app", () => {
    const NextApp = require("./app").default;

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      container
    );
  });
}
