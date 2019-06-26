import React from "react";
import Dasboard from "../Pages/Dasboard";
import Drivers from "../Pages/Drivers";
import Trips from "../Pages/Trips";
import { Route, Switch } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dasboard} />
    <Route path="/drivers" component={Drivers} />
    <Route path="/trips" component={Trips} />
  </Switch>
);

export default Routes;
