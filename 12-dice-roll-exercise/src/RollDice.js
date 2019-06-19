// needs to render 2 die components and roll button

import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rolling: false,
            buttonText: 'Roll Dice!'
        };
        this.die = React.createRef();
        this.die2 = React.createRef();
    }
    handleClick = () => {
        if(!this.state.rolling){
            this.setState({rolling: true});
            this.die.current.diceRoll();
            this.die2.current.diceRoll();
            this.setState({ buttonText: 'Rolling.......' });
            setTimeout(() => {
                this.setState({ buttonText: 'Roll Dice!' });
                this.setState({rolling: false});
                }, 500);
        }
    };
    render() {
        // this.diceRoll();
        return (
            <div>
                <Die ref={this.die} />
                <Die ref={this.die2} />
                <div>
                    <button className="button" onClick={this.handleClick}>
                        {this.state.buttonText}
                    </button>
                </div>
            </div>
        );
    }
}

export default RollDice;
