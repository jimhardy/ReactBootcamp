import React from 'react';
import './App.css';
// import ScoreKeeper from './scoreKeeper';
import LottoGame from './lottoGame';

function App() {
  return (
    <div className="App">
      <LottoGame numBalls={6} maxNum={40} />
    </div>
  );
}

export default App;
