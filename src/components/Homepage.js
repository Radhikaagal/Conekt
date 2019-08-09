import React, { Component } from "react";
import "./../styles/Homepage.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Login from "./../components/Login";
import Signup from "./../components/Signup";
import Alert from "./../components/Alert";
import Navbarr from "./../components/Navbarr";

class Homepage extends Component {
  render() {
    return (
      <Router>
          <Navbarr />
        <div className="right">
          <h1 className="display-3" align="center">
            Conekt
          </h1>
          <p className="lead" align="center">
            Find Your Group
          </p>
        </div>
        <div className="left">
        <Alert />
          <Route path="/" exact component={Signup} />
          <Route path="/login" exact component={Login} />
        
          </div>
         
       
      
      </Router>
    );
  }
}

export default Homepage;
