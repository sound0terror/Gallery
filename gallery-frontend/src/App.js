import React, {Component, Fragment} from 'react';
import Toolbar from "./components/UI/Toolbar/Toolbar";
import {Container} from "reactstrap";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {NotificationContainer} from 'react-notifications';
import {logoutUser} from "./store/actions/usersActions";
import Routes from "./Routes";

class App extends Component {
  state = {
    show: false
  };


  render() {
    return (
          <Fragment>
            <NotificationContainer/>
            <header>
              <Toolbar
                user={this.props.users}
                logout={this.props.logoutUser}
              />
            </header>
            <main>
              <Container>
                <Routes user={this.props.users}/>
              </Container>
            </main>
          </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.user,
  }
};
const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));