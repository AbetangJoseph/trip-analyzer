import React from "react";
import Dashboard from "../Pages/Dashboard";
import Drivers from "../Pages/Drivers";
import Trips from "../Pages/Trips";
import { Route, Switch, withRouter } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/drivers" component={Drivers} />
    <Route path="/trip/:id" component={Trips} />
  </Switch>
);

export default withRouter(Routes);
