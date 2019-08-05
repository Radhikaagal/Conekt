import React from "react";
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Timeline from "./components/Timeline";

function App() {
  return (
<<<<<<< HEAD
     <Router>
        
          <Route path="/" exact component={Homepage} />
          <Route path="/login"exact component={Homepage} />
          <Route path="/profile" component={Profile} />
     </Router>
=======
    <Router>
      <Route path="/" component={Homepage} exact />
      <Route path="/newsfeed" component={Timeline} exact />
    </Router>
>>>>>>> b0f4dc0d13ae6aebb26559fe119b312599aaab42
  );
}

export default App;
