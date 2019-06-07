// basic App component, just renders other components
import ReactDOM from 'react-dom';
import React , {Component} from 'react';
import Pokegame from './Pokegame';
import './index.css';

class App extends Component {
  render() {
    return (
      <Pokegame/> 
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));