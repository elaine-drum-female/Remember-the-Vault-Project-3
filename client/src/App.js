import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/hoc/wrapper";
import NewUser from "./components/NewRegister/";
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
        <Route exact path="/register" component={NewUser} />
        <Route exact path="/signed_in" component={RegisterLogin} />
      </Switch>
      </Wrapper>
      </div>
    </Router>
  );
}

export default App;
