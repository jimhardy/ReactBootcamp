import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: ''
        };
    }
    render() {
        return (
            <div className="colorBox" style={{background:this.props.color}} />
        );
    }
}

export default ColorBox;
