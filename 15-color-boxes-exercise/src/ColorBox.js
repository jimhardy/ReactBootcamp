import React, { Component } from 'react';
import './ColorBox.css';
import {randomValue} from './helpers';

class ColorBox extends Component {
constructor(props) {
    super(props);
    this.state = {
        red: 0,
        green: 0, 
        blue: 0,
        color: `rgb(${randomValue(255)} , ${randomValue(255)} , ${randomValue(255)})`
    }
}

colorChanger = () => {
    console.log('change color');
    this.setState(currSt => ({
        color: `rgb(${randomValue(255)} , ${randomValue(255)} , ${randomValue(255)})`
    }))
    
}

handleClick = () => {
    this.colorChanger();
}

    render() { 
        return ( 
            <div style={{background:this.state.color}} className="colorBox" onClick={this.handleClick} /> 
         );
    }
}
 
export default ColorBox;