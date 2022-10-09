import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const renderMarketing = (element) => {
  ReactDOM.render(<App />, element);
};

const localDevContainer = document.querySelector("#dev-marketing-root");

if (process.env.NODE_ENV === "development" && localDevContainer)
  renderMarketing(localDevContainer);

export { renderMarketing };
