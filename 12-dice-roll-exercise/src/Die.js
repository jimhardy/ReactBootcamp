import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rollValue: this.dieValue(),
            rolling: false
        };
        this.numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six'];
        this.link = this.getIcon();
    }
    dieValue = e => Math.floor(Math.random() * 6 + 1);
    getIcon = () => `fas fa-dice-${this.numbers[this.state.rollValue]}`;
    render() {
        if (this.state.rolling === true) {
            this.setState({
                rollValue: this.dieValue(),
                rolling: false
            });
        }
        return (
            <div>
                <i className={this.link} />
            </div>
        );
    }
}

export default Die;
