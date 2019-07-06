import React from "react";
import {Route, Switch} from "react-router";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Images from "./containers/Images/Images";
import UserImages from "./containers/UserImages/UserImages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Images}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/images/author/:authorId" exact component={UserImages}/>
    </Switch>
  )
};

export default Routes;
