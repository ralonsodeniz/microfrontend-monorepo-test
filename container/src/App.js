import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Marketing from "../components/MarketingApp";
import Header from "../components/Header";

const generateClassname = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => (
  <StylesProvider generateClassName={generateClassname}>
    <BrowserRouter>
      <Header />
      <Marketing />
    </BrowserRouter>
  </StylesProvider>
);

export default App;
