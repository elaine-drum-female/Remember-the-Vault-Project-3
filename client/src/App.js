import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splashscreen from "./components/Splashscreen";
import './App.css';

function App() {
  return (
    <Router>
     <div>
      <Switch>
        <Route exact path="/"component={Splashscreen}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
