import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import logo from "./logo.svg";
// import "./App.css";
import SignUp from "./pages/signup"

class App extends Component {
  render() {
    return (
    <Router>
    <div>
    <Route path="/" component={
      SignUp
    } />
      </div>
      </Router>
    );
  }
}

export default App;
