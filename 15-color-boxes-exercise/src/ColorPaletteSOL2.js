import React, { Component } from 'react';
import ColorBox from './ColorBoxSOL2';
import './ColorBox.css';

class ColorPalette extends Component {
    static defaultProps = {
        colors: ['rgb(255 , 0 , 0)', 'rgb(0 , 255 , 0)', 'rgb(0, 0 , 255)']
    };
    constructor(props) {
        super(props);
        this.state = {};
    }

colorPicker = () => {
    console.log('new color!')
}

handleClick = () => {
    this.colorPicker();
}

    render() {
        return (
            <div className="wrapper">
                {this.props.colors.map(i => {
                    return (
                            <ColorBox color={i} onClick={this.handleClick} />
                    );
                })}
            </div>
        );
    }
}

export default ColorPalette;
