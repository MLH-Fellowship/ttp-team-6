import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  HomePageContainer,
  PortfolioPageContainer,
  ExtraPageContainer,
<<<<<<< HEAD
  AboutPageContainer,
=======
  MyPortfolioContainer,
>>>>>>> 26cf006f58d37ac15ee1c3be3be5b8be328bf22e
} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/portfolios" component={PortfolioPageContainer} />
      <Route exact path="/extras" component={ExtraPageContainer} />
<<<<<<< HEAD
      <Route exact path="/about" component={AboutPageContainer} />
=======
      <Route exact path="/myPortfolio" component={MyPortfolioContainer} />
>>>>>>> 26cf006f58d37ac15ee1c3be3be5b8be328bf22e
    </Switch>
  );
};

export default RoutesView;
