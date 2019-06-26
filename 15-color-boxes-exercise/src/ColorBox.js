import React, { Component } from 'react';
import './ColorBox.css';
import { randomValue } from './helpers';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: `rgb(${randomValue(255)} , ${randomValue(
                255
            )} , ${randomValue(255)})`
        };
    }

    colorChanger = () => {
        console.log('change color');
        this.setState(currSt => ({
            color: `rgb(${randomValue(255)} , ${randomValue(
                255
            )} , ${randomValue(255)})`
        }));
    };

    handleClick = () => {
        this.colorChanger();
    };

    render() {
        return (
            <div
                style={{ backgroundColor: this.state.color }}
                className="colorBox"
                onClick={this.handleClick}
            />
        );
    }
}

export default ColorBox;
