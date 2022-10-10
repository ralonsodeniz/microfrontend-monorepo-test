import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import SignIn from "./components/Signin";
import SignUp from "./components/Signup";

const generateClassname = createGenerateClassName({
  productionPrefix: "au",
});

const App = ({ history }) => (
  <StylesProvider generateClassName={generateClassname}>
    <Router history={history}>
      <Switch>
        <Route exact path={"/auth/signin"} component={SignIn} />
        <Route exact path={"/auth/signup"} component={SignUp} />
      </Switch>
    </Router>
  </StylesProvider>
);

export default App;
