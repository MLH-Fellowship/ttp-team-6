import React from "react";
import { Switch, Route } from "react-router";
import {
  HomePageContainer,
  PortfolioPageContainer,
  ExtraPageContainer,
  MyPortfolioContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/portfolios" component={PortfolioPageContainer} />
      <Route exact path="/extras" component={ExtraPageContainer} />
      <Route exact path="/myPortfolio" component={MyPortfolioContainer} />
    </Switch>
  );
};

export default RoutesView;
