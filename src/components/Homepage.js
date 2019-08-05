import React, { Component } from "react";
import conekt from "./../conekt.png";
import "./../styles/Homepage.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";

import { NavbarBrand } from "reactstrap";

class Homepage extends Component {
  render() {
    return (
      <Router>
        <div className="bgimg">
          <div className="App__Aside">
            <NavLink exact to="/">
              <NavbarBrand href="/">
                <img src={conekt} height="60px" alt="conektlogo" />
              </NavbarBrand>
            </NavLink>
            <h1 className="display-3" align="center">
              Conekt
            </h1>
            <p className="lead" align="center">
              Find Your Group
            </p>
          </div>

          <div className="App__Form">
            <div className="PageSwitcher">
              <NavLink
                to="/login"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign In
              </NavLink>
              <NavLink
                exact
                to="/"
                activeClassName="PageSwitcher__Item--Active"
                className="PageSwitcher__Item"
              >
                Sign Up
              </NavLink>
            </div>

            <Route path="/" exact component={Signup} />
            <Route path="/login" exact component={Login} />
          </div>
        </div>
      </Router>
    );
  }
}

export default Homepage;
