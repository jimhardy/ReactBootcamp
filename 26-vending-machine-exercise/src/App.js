import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import VendingMachine from './VendingMachine';
import Sardines from './Sardines'
import Crisps from './Crisps';
import Soda from './Soda';
import Navbar from './Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/Sardines" render={() => <Sardines />} />
          <Route exact path="/Crisps" render={() => <Crisps />} />
          <Route exact path="/Soda" render={() => <Soda />} />
        </Switch>
      </div>
    );
  }
}

export default App;
