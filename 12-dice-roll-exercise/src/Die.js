import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rollValue: this.dieValue(),
            link: 'fas fa-dice-one',
            rolling: false
        };
        this.numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six'];
    }
    dieValue = e => Math.floor(Math.random() * 6 + 1);
    getIcon = () => `fas fa-dice-${this.numbers[this.state.rollValue]}`;
    diceRoll = () => {
        this.setState({
            rollValue: this.dieValue(),
            link: this.getIcon(),
            rolling: true
        });
        setTimeout(() => {
            this.setState({ rolling: false });
        }, 500);
    };
    render() {
        let classes = `${this.state.link} ${
            this.state.rolling ? 'rolling' : ''
        } `;
        return (
            <div className="die">
                <i className={classes} />
            </div>
        );
    }
}

export default Die;
