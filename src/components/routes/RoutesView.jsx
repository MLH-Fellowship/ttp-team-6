import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePageContainer, ProjectPageContainer} from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/projects" component={ProjectPageContainer} />
    </Switch>
  );
};

export default RoutesView;
