import React from "react";
import Homepage from "./components/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Timeline from "./components/Timeline";
import Commute from "./components/Commute";

function App() {
  return (
    <Router>
      <Route path="/" component={Homepage} exact />
      <Route exact path="/newsfeed" component={withRouter(Timeline)} />
      <Route path="/commute" component={Commute} exact />
    </Router>
  );
}

export default App;
