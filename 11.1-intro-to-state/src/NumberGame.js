// create clicker component
// h1 displays number = 1
// button sets new number between 1 and 10
// if you get 7, says "you win!" and button disappears

import React, { Component } from 'react';

class NumberPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isWinner: false,
            number: 1,
            maxNum: 10
        };
    }
    clicker = e => {
        const randoNum = Math.floor(Math.random() * this.state.maxNum);
        this.setState({ number: randoNum });
        if (randoNum === 7) {
            this.setState({ isWinner: true });
        }
    };
    render() {
        return (
            <div>
                <h1>NumberPicker!</h1>
                <h1>{this.state.number}</h1>
                {this.state.isWinner ? (
                    <h1>YOU WIN</h1>
                ) : (
                    <button onClick={this.clicker}>Click Me!</button>
                )}
            </div>
        );
    }
}

export default NumberPicker;
