import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
    constructor(props) {
        super(props);
       this.state = {};
    }

    handleClick = (e) => {
        this.props.colorChanger(this.props.value);
    };

    render() {
        return (
            <div
                style={{ backgroundColor: this.props.color }}
                className="colorBox"
                onClick={this.handleClick}
            />
        );
    }
}

export default ColorBox;
