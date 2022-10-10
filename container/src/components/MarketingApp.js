import React from "react";
import { useHistory } from "react-router-dom";

import { renderMarketing } from "marketing/MarketingApp";

const Marketing = ({ hostAPI }) => {
  const history = useHistory();

  const handleMountMarketing = (element) => {
    const marketingAPI = renderMarketing(element, hostAPI);
    const { onParentNavigate } = marketingAPI;
    history.listen(onParentNavigate);
  };

  return (
    <div
      id={"prod-marketing-root"}
      ref={(element) => element && handleMountMarketing(element)}
    />
  );
};

export default Marketing;
