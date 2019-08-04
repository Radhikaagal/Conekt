import React from 'react';
import Homepage from "./components/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
     <Router>
        
          <Route path="/" component={Homepage} exact />
          
     </Router>
  );
}

export default App;
