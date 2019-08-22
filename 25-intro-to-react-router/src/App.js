// ====================================================
// IF YOU ARE LOOKING FOR THE 'fake' ROUTING EXAMPLE...
// I MOVED THE CODE INTO FakeRouting.js
// ====================================================
import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav className='App-nav'>
          <NavLink exact activeClassName='active-link' to='/'>About</NavLink>
          <NavLink exact activeClassName='active-link' to='/dog'>Dog</NavLink>
          <NavLink exact activeClassName='active-link' to='/dog/r'>(r)</NavLink>
          <NavLink exact activeClassName='active-link' to='/dog/c'>(c)</NavLink>
          <NavLink exact activeClassName='active-link' to='/contact'>Contact</NavLink>
        </nav>
        <Switch>
          <Route exact path="/" component={About} />
          {/* Component will instantiate a new component every time */}
          <Route exact path="/dog/c" component={() => <Dog name='Muffins' />} />
          {/* Render will try and re-use the same component */}
          <Route exact path="/dog/r" render={() => <Dog name='Biscuits' />} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    );
  }
}

export default App;