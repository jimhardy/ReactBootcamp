// basic App component, just renders other components
import ReactDOM from 'react-dom';
import React from 'react';
import Pokedex from './Pokedex';

class App extends React.Component {
  render() {
    return (
      <Pokedex/> 
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));