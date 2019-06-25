import React, { Component } from 'react';
import ColorBox from './ColorBox';

class ColorPalette extends Component {
    static defaultProps = {
        static: null
    };
    constructor(props) {
        super(props);
        this.state = {
            nBoxes: 18
        };
    }
    render() {
        return (
            <div className="Wrapper">
                {Array.apply(null, Array(this.state.nBoxes)).map((i)=>
                <ColorBox className="colorBox" />)
                }
            </div>
        );
    }
}

export default ColorPalette;
