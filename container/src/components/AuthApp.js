import React from "react";
import { useHistory } from "react-router-dom";

import { renderAuth } from "auth/AuthApp";

const Auth = ({ hostAPI }) => {
  const history = useHistory();

  const handleMountAuth = (element) => {
    const authAPI = renderAuth(element, hostAPI);
    const { onParentNavigate } = authAPI;
    history.listen(onParentNavigate);
  };

  return (
    <div
      id={"prod-auth-root"}
      ref={(element) => element && handleMountAuth(element)}
    />
  );
};

export default Auth;
