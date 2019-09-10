import React from 'react';
import './App.css';
import { Router, Switch } from 'react-router-dom';

function App() {
  defaultprops = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Hazel",
        age: 3,
        src: hazel,
        facts: [
          "Hazel has soooo much energy!",
          "Hazel is highly intelligent.",
          "Hazel loves people more than dogs."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is not the brightest dog",
          "Tubby does not like walks or exercise.",
          "Tubby loves eating food."
        ]
      }
    ]
  }
  return (
    <div className="App">
      <Nav dogs={this.dogs} />
      <Switch>
        {this.dogs.map(dog => {
          <Dog stats={dog} />
        })}
      </Switch>
    </div>
  );
}

export default App;
