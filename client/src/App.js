import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Splashscreen from "./components/Splashscreen";
import Wrapper from "./components/hoc/wrapper";
import './App.css';

function App() {
  return (
    <Router>
     <div>
     <Wrapper>
      <Switch>
        <Route exact path="/"component={Splashscreen}/>
      </Switch>
      </Wrapper>
      </div>
    </Router>
  );
}

export default App;
