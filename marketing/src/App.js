import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassname = createGenerateClassName({
  productionPrefix: "ma",
});

const App = ({ history }) => (
  <StylesProvider generateClassName={generateClassname}>
    <Router history={history}>
      <Switch>
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/" component={Landing} />
      </Switch>
    </Router>
  </StylesProvider>
);

export default App;
