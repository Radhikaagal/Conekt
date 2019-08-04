import React from 'react';
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
     <Router>
        
          <Route path="/" exact component={Homepage} />
          <Route path="/login"exact component={Homepage} />
          <Route path="/profile" component={Profile} />
     </Router>
  );
}

export default App;
