import React, { Component } from 'react';
import ColorBox from './ColorBox';
import {randomValue , randomIndex} from './helpers';

class ColorPalette extends Component {
    static defaultProps = {
        static: null,
        colors: ['red' , 'green' , 'blue' , 'yellow' , 'purple' , 'black' , 'white']
    };
    constructor(props) {
        super(props);
        this.state = {
            nBoxes: 18
        };
    }

    colorChanger = (e) => {
        console.log('change color function from parent');
        const index = randomIndex(this.props.colors) ;
        console.log(index);
        this.setState(currSt => ({
            color: currSt.index
        }));
    };
    render() {
   
        return (
            <div className="wrapper">
                {this.props.colors.map(i => (
                    <ColorBox
                        value={i}
                        colorChanger={this.colorChanger}
                        className="colorBox"
                        color={i}
                    />
                ))}
            </div>
        );
    }
}

export default ColorPalette;
