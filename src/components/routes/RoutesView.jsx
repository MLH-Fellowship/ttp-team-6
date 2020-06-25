import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  PortfolioPageContainer,
  ExtraPageContainer,
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/portfolios" component={PortfolioPageContainer} />
      <Route exact path="/extras" component={ExtraPageContainer} />
    </Switch>
  );
};

export default RoutesView;
