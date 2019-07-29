import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    constructor(props) {
        super(props);
        this.numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six'];
    }
    getIcon = () => `Die fas fa-dice-${this.numbers[this.props.val]}`;

    handleClick = evt => {
        this.props.handleClick(this.props.idx);
    };

    render() {
        let classes = this.getIcon();
        const { locked, rolling, disabled } = this.props;
        if (locked) classes += ' Die-locked';
        if (!locked && rolling) classes += ' rolling';
        return (
            <i
                className={classes}
                onClick={this.handleClick}
                disabled={disabled}
            />
        );
    }
}

export default Die;
