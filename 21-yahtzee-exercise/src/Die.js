import React, { Component } from 'react';
import './Die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Die extends Component {
    render() {
        return (
            <button
                className={'Die'}
                style={{
                    backgroundColor: this.props.locked ? 'grey' : 'black',
                }}
                onClick={this.props.handleClick}
            >
                <FontAwesomeIcon className="diceOne" />
                {this.props.val}
            </button>
        );
    }
}

export default Die;
