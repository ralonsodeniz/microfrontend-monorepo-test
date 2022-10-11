import React from "react";

import { renderDashboard } from "dashboard/DashboardApp";

const Dashboard = () => (
  <div
    id={"prod-dashboard-root"}
    ref={(element) => element && renderDashboard(element)}
  />
);

export default Dashboard;
