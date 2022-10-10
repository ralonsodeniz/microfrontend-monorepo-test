import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Header from "./components/Header";
import Routes from "./Routes";

const generateClassname = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => (
  <StylesProvider generateClassName={generateClassname}>
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  </StylesProvider>
);

export default App;
