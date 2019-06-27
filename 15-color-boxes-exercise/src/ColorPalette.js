import React, { Component } from 'react';
import ColorBox from './ColorBox';
import {randomValue} from './helpers';

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

    colorChanger = () => {
        console.log('change color function from parent');
        this.setState(currSt => ({
            color: `rgb(${randomValue(255)} , ${randomValue(
                255
            )} , ${randomValue(255)})`
        }));
    };
    render() {
   
        return (
            <div className="wrapper">
                {Array.apply(null, Array(this.state.nBoxes)).map(i => (
                    <ColorBox
                        value={i}
                        colorChanger={this.colorChanger}
                        className="colorBox"
                        color={`rgb(${randomValue(255)} , ${randomValue(
                            255
                        )} , ${randomValue(255)})`}
                    />
                ))}
            </div>
        );
    }
}

export default ColorPalette;
