import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Food from './Food';
import Meal from './Meal';
import FoodSearch from './FoodSearch';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Route exact path='/food/:name' render={(routeProps) => <Food {...routeProps} />} /> */}
        <Route exact path='/' render={() => <FoodSearch />} />
        <Route exact path='/food/:name' component={Food} />
        <Route exact path='/food/:foodName/drink/:drinkName' component={Meal} />
        <Route render={() => <h1>404 not found</h1>} />
      </Switch>
    </div>
  );
}

export default App;
