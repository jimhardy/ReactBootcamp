import React, { Component } from 'react';
import './App.css';
import { Route, Switch, NavLink } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Sardines from './Sardines'
import Crisps from './Crisps';
import Soda from './Soda';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="App-nav">
          <NavLink exact activeClassName='active-link' to='/'>Home</NavLink>
          <NavLink exact activeClassName='active-link' to='/Sardines'>Sardines</NavLink>
          <NavLink exact activeClassName='active-link' to='/Crisps'>Crisps</NavLink>
          <NavLink exact activeClassName='active-link' to='/Soda'>Soda</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={VendingMachine} />
          <Route exact path="/Sardines" component={Sardines} />
          <Route exact path="/Crisps" component={Crisps} />
          <Route exact path="/Soda" component={Soda} />
        </Switch>
      </div>
    );
  }
}

export default App;
