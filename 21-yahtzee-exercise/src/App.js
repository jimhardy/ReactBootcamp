import React, { Component } from 'react';
import Game from './Game';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faDiceOne,
    faDiceTwo,
    faDiceThree,
    faDiceFour,
    faDiceFive,
    faDiceSix,
} from '@fortawesome/free-solid-svg-icons';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Game />
            </div>
        );
    }
}

export default App;
