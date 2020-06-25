import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  PortfolioPageContainer,
  ExtraPageContainer,
  PortfolioPage1,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/portfolios" component={PortfolioPageContainer} />
      <Route exact path="/extras" component={ExtraPageContainer} />
      <Route exact path="/portfolio-1" component={PortfolioPage1} />
    </Switch>
  );
};

export default RoutesView;
