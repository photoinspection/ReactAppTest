import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import AuthNavbar from "./AuthNavbar";
import UnAuthNavbar from "./UnAuthNavbar";
import JWT from "./our-jwt";
import Login from "./forms/Login";
const jjj = new JWT();
export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AuthRoute
            path="/"
            authComponent={AuthNavbar}
            unAuthComponent={UnAuthNavbar}
          />
          <Route exact path="/" component={Login} />
        </div>
      </Router>
    );
  }
}
