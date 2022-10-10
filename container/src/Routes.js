import React, { useMemo, lazy, Suspense } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Progress from "./components/Progress";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

const Routes = () => {
  const history = useHistory();
  const hostAPI = useMemo(
    () => ({
      onNavigate: ({ pathname: nextPathname }) => {
        const {
          location: { pathname },
          push,
        } = history;

        if (pathname !== nextPathname) push(nextPathname);
      },
      getInitialPath: () => {
        const {
          location: { pathname },
        } = history;

        return pathname;
      },
    }),
    [history]
  );

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
