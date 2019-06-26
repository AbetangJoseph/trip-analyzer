import React from "react";
import Dashboard from "../Pages/Dashboard";
import Drivers from "../Pages/Drivers";
import Trips from "../Pages/Trips";
import { Route, Switch } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route path="/drivers" component={Drivers} />
    <Route path="/trips" component={Trips} />
  </Switch>
);

export default Routes;
