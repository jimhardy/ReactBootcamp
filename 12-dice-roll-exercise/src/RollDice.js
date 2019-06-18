// needs to render 2 die components and roll button

import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rolling: false
        };
    }
    diceRoll = () => {
        console.log('die roll');
        this.setState({rolling: true})
        console.log(this.state.rolling);
    };
    render() {
        // this.diceRoll();
        return (
            <div>
                <Die rolling={this.state.rolling} />
                <button onClick={this.diceRoll}>Roll Dice!</button>
            </div>
        );
    }
}

export default RollDice;
