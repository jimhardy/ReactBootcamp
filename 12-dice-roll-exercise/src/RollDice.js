// needs to render 2 die components and roll button

import React, { Component } from 'react';
import Die from './Die';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rolling: false
        };
        this.die = React.createRef();
        this.die2 = React.createRef();
    }
    handleClick = () => {
        this.die.current.diceRoll();
        this.die2.current.diceRoll();
    };
    render() {
        // this.diceRoll();
        return (
            <div>
                <Die ref={this.die} rolling={this.state.rolling} />
                <Die ref={this.die2} rolling={this.state.rolling} />
                <button onClick={this.handleClick}>Roll Dice!</button>
            </div>
        );
    }
}

export default RollDice;
