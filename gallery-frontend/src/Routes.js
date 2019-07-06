import React from "react";
import {Redirect, Route, Switch} from "react-router";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import Images from "./containers/Images/Images";
import UserImages from "./containers/UserImages/UserImages";
import NewImage from "./containers/NewImage/NewImage";

const ProtectedRoute = props => {
  return props.isAllowed ? <Route {...props} /> : <Redirect to="/" />
};
const Routes = ({user}) => {
  return (
    <Switch>
      <Route path="/" exact component={Images}/>
      <Route path="/register" component={Register}/>
      <Route path="/login" component={Login}/>
      <Route path="/images/author/:authorId" exact component={UserImages}/>
      <ProtectedRoute
        path="/images/new"
        component={NewImage}
        isAllowed={user}
      />
    </Switch>
  )
};

export default Routes;
