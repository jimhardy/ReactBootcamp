import React, { Component } from 'react';
import ColorBox from './ColorBox';

class ColorPalette extends Component {
    static defaultProps = {
        static: null
    };
    constructor(props) {
        super(props);
        this.state = {
            nBoxes: 10
        };
    }
    render() {
        return (
            <div>
                <ColorBox />
                <ColorBox />
                <ColorBox />
                <ColorBox />
                <ColorBox />
                <ColorBox />
                <ColorBox />
                <ColorBox />
                <ColorBox />
                <ColorBox />
            </div>
        );
    }
}

export default ColorPalette;
