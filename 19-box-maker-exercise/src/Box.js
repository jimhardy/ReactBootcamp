// box component
import React, { Component } from 'react';

class Box extends Component {
    handleClick = evt => {
        console.log('remove box');
        this.props.removeBox(this.props.value);
    };
    boxStyle = () => {
        return {
            height: `${this.props.height}px`,
            width: `${this.props.width}px`,
            backgroundColor: this.props.color,
        };
    };
    render() {
        return (
            <div>
                <div style={this.boxStyle()} />
                <button onClick={this.handleClick}>Remove</button>
            </div>
        );
    }
}

export default Box;
