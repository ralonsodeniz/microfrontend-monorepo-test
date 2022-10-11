import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const Routes = ({ hostAPI }) => {
  return (
    <Suspense fallback={<Progress />}>
      <Switch>
        <Route exact path="/">
          <MarketingLazy hostAPI={hostAPI} />
        </Route>
        <Route exact path="/pricing">
          <MarketingLazy hostAPI={hostAPI} />
        </Route>
        <Route path="/auth">
          <AuthLazy hostAPI={hostAPI} />
        </Route>
      </Switch>
    </Suspense>
  );
};

export default Routes;
