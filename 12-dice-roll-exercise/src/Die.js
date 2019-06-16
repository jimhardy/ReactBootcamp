import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    constructor(props) {
        super(props);
        this.state = {rollValue: 1};
        const numbers = ['' , 'one' , 'two' , 'three' , 'four' , 'five' , 'six'];
        const rollValue = `fas fa-dice-${numbers[this.rollValue]}`;
    }
    iconGetter = () => {
        if(this.rollValue === 1){

        }
    }
    
    render() {
        return (
            <div>
                <i className={this.state.rollValue}></i>
            </div>
        );
    }
}

export default Die;