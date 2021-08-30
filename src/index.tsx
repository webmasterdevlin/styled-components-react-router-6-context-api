import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { GlobalStyle } from "../global.style";

// "watch": "parcel watch public/index.html" was added in packages.json because HMR does not work sometimes.
if (module.hot) {
  module.hot.accept();
}
// Router must be here because useRoutes should be inside in a children React component
ReactDOM.render(
  <Router>
    <GlobalStyle />
    <App />
  </Router>,
  document.getElementById("root")
);
