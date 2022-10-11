import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Layout from "./Layout";

const generateClassname = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => (
  <StylesProvider generateClassName={generateClassname}>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </StylesProvider>
);

export default App;
