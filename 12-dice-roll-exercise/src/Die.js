import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rollValue: 2,
        };
        this.numbers = ['' , 'one' , 'two' , 'three' , 'four' , 'five' , 'six'];
        this.link = this.getIcon();
    }
    getIcon = () => {
        return`fas fa-dice-${this.numbers[this.state.rollValue]}`;
    }
    render() {
        return (
            <div>
                <i className={this.link}></i>
            </div>
        );
    }
}

export default Die;