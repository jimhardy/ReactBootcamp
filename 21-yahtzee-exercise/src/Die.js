import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    constructor(props) {
        super(props);
        this.numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six'];
    }
    getIcon = () => `fas fa-dice-${this.numbers[this.props.val]}`;

    render() {
        return (
            <div>
                <button
                    className={'Die'}
                    style={{
                        backgroundColor: this.props.locked ? 'grey' : 'black',
                    }}
                    onClick={this.props.handleClick}
                >
                    <i className={this.getIcon()} />
                </button>
            </div>
        );
    }
}

export default Die;
