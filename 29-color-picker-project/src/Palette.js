import React, { Component } from 'react';
import ColorBox from './ColorBox';

class Palette extends Component {
    state = {}
    render() {
        const colorBoxes = this.props.colors.map(color =>
            <ColorBox background={color} />
        )
        return (
            <div className='palette'>
                {/* Navbar goes here */}
                <div className='palette-colors'>
                    {colorBoxes}
                </div>
                {/* Footer */}
            </div>
        );
    }
}

export default Palette;