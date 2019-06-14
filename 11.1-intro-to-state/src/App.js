import React from 'react';
import './App.css';
import Game from './Game';
import Rando from './Rando';
import Button from './Button';

function App() {
  return (
    <div>
     <Rando maxNum={7000}/>
     <Button />
    </div>
  );
}

export default App;
