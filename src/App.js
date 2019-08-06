import React from "react";
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Timeline from "./components/Timeline";
//redux
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Homepage} />
        <Route path="/profile" component={Profile} />
        <Route path="/newsfeed" component={Timeline} exact />
      </Router>
    </Provider>
  );
}

export default App;
