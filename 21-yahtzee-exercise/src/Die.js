import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    constructor(props) {
        super(props);
        this.numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six'];
    }
    getIcon = () => `fas fa-dice-${this.numbers[this.props.val]}`;

    handleClick = evt => {
        this.props.handleClick(this.props.idx);
    };

    render() {
        return (
            <div>
                <button
                    className={'Die'}
                    style={{
                        backgroundColor: this.props.locked ? 'grey' : 'black',
                    }}
                    onClick={this.handleClick}
                >
                    <i className={this.getIcon()} />
                </button>
            </div>
        );
    }
}

export default Die;
