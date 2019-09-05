import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Food from './Food';
import Meal from './Meal';

function App() {
  return (
    <div className="App">
      {/* <Route exact path='/food/:name' render={(routeProps) => <Food {...routeProps} />} /> */}
      <Route exact path='/food/:name' component={Food} />
      <Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />
    </div>
  );
}

export default App;
