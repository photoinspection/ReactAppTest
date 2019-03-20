import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class AppRouter extends Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}
export default AppRouter;
