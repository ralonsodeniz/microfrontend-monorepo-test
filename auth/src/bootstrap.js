import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";

import App from "./App";

const localDevContainer = document.querySelector("#dev-auth-root");

const isLocalDevEnv =
  process.env.NODE_ENV === "development" && localDevContainer;

const renderAuth = (element, hostAPI) => {
  const { onNavigate, getInitialPath, onSignIn } = hostAPI;
  const history = isLocalDevEnv
    ? createBrowserHistory()
    : createMemoryHistory({
        initialEntries: [getInitialPath()],
      });
  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App history={history} onSignIn={onSignIn} />, element);

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const {
        location: { pathname },
        push,
      } = history;

      if (pathname !== nextPathname) push(nextPathname);
    },
  };
};

if (isLocalDevEnv) renderAuth(localDevContainer, {});

export { renderAuth };
