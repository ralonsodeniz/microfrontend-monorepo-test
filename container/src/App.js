import React from "react";
import { BrowserRouter } from "react-router-dom";

import Marketing from "../components/MarketingApp";
import Header from "../components/Header";

const App = () => (
  <BrowserRouter>
    <Header />
    <Marketing />
  </BrowserRouter>
);

export default App;
