import React from 'react';
import './App.css';
// import ScoreKeeper from './scoreKeeper';
import LottoGame from './lottoGame';

function App() {
  return (
    <div className="App">
      <LottoGame />
      <LottoGame title={'mini lotto'} numBalls={4} maxNum={10} />
    </div>
  );
}

export default App;
