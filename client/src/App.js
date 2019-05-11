import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Wrapper from "./components/hoc/wrapper";
import RegisterLogin from "./components/Register_Login";
import './App.css';

function App() {
  return (
    <Router>
     <div>
     <Navbar />
     <Wrapper>
      <Switch>
        <Route exact path="/register_login" component={RegisterLogin}/>
        <Route exact path="/"component={Home}/>
      </Switch>
      </Wrapper>
      </div>
    </Router>
  );
}

export default App;
