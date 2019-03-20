import React, { Component } from "react";
import JWT from './our-jwt';
import Login from './forms/Login';
const jjj = new JWT();
export default class App extends Component {
  render() {
    return <Login></Login>;
  }
}
