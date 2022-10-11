import React from "react";

import Header from "./components/Header";
import Routes from "./Routes";
import { useHostAPI } from "./hooks/useHostAPI";

const Layout = () => {
  const { hostAPI, isSignedIn, onSignOut } = useHostAPI();

  return (
    <>
      <Header isSignedIn={isSignedIn} onSignOut={onSignOut} />
      <Routes hostAPI={hostAPI} isSignedIn={isSignedIn} />
    </>
  );
};

export default Layout;
