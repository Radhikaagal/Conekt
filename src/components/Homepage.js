import React, { Component } from "react";
import conekt from "./../conekt.png";
import "./../styles/Homepage.css";
<<<<<<< HEAD
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import Login from "./../components/Login";
import Signup from "./../components/Signup";
=======
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
>>>>>>> b0f4dc0d13ae6aebb26559fe119b312599aaab42

import { NavbarBrand } from "reactstrap";

class Homepage extends Component {
  render() {
    return (
<<<<<<< HEAD
  <Router>
     <div className="bgimg">
      <div className="App__Aside ml-auto">
        <NavLink exact to="/">
          <NavbarBrand href="/"><img src={conekt} height="60px" alt="conektlogo" /></NavbarBrand>
        </NavLink>
         <h1 className="display-3" align="center">Conekt</h1>
         <p className="lead" align="center">Find Your Group</p>
      </div>
  
      <div className="App__Form">
          <div className="PageSwitcher">
              <NavLink to="/login" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
              <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
            </div>
            <Route path="/" exact component={Signup}>
            </Route>
            <Route path="/login" exact component={Login}>
            </Route>
           
=======
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
>>>>>>> b0f4dc0d13ae6aebb26559fe119b312599aaab42
        </div>
      </Router>
    );
  }
}

export default Homepage;
