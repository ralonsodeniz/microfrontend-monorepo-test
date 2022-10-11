import { createApp } from "vue";

import Dashboard from "./components/Dashboard";

const localDevContainer = document.querySelector("#dev-dashboard-root");

const isLocalDevEnv =
  process.env.NODE_ENV === "development" && localDevContainer;

const renderDashboard = (element) => {
  const app = createApp(Dashboard);
  app.mount(element);
};

if (isLocalDevEnv) renderDashboard(localDevContainer);

export { renderDashboard };
