import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));
const Dashboard = lazy(() => import("./components/DashboardApp"));

const Routes = ({ hostAPI, isSignedIn }) => (
  <Suspense fallback={<Progress />}>
    <Switch>
      <Route exact path="/">
        <MarketingLazy hostAPI={hostAPI} />
      </Route>
      <Route exact path="/pricing">
        <MarketingLazy hostAPI={hostAPI} />
      </Route>
      <Route exact path="/dashboard">
        {isSignedIn ? <Dashboard /> : <Redirect to="/" />}
      </Route>
      <Route path="/auth">
        <AuthLazy hostAPI={hostAPI} />
      </Route>
    </Switch>
  </Suspense>
);

export default Routes;
