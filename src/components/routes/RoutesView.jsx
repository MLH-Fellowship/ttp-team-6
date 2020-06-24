import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePageContainer, PortfolioPageContainer } from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/portfolios" component={PortfolioPageContainer} />
    </Switch>
  );
};

export default RoutesView;
