import React from "react";
import {Route, Switch} from "react-router";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
    </Switch>
  )
};

export default Routes;
