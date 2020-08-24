import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Switch, Redirect,BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import SignIn from './Sign_in';


const hist = createBrowserHistory();

function App() {
  return (
    <BrowserRouter>

    <Router  history={hist}>
       <Switch>
        <Route component={SignIn} exact path='/'/> 
        {/* <ProtectedRoute  component={HomePage}  path='/home' /> */}

      </Switch>
    </Router>
    </BrowserRouter>
  );
}

export default App;
