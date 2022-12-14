import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";

import App from "./App";

const localDevContainer = document.querySelector("#dev-marketing-root");

const isLocalDevEnv =
  process.env.NODE_ENV === "development" && localDevContainer;

const renderMarketing = (element, hostAPI) => {
  const { onNavigate, getInitialPath } = hostAPI;
  const history = isLocalDevEnv
    ? createBrowserHistory()
    : createMemoryHistory({
        initialEntries: [getInitialPath()],
      });
  if (onNavigate) history.listen(onNavigate);

  ReactDOM.render(<App history={history} />, element);

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

if (isLocalDevEnv) renderMarketing(localDevContainer, {});

export { renderMarketing };
