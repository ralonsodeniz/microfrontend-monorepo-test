import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassname = createGenerateClassName({
  productionPrefix: "ma",
});

const App = () => (
  <StylesProvider generateClassName={generateClassname}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </BrowserRouter>
  </StylesProvider>
);

export default App;
