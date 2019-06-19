import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render() {
        return (
            <div className="die">
                <i className={`fas fa-dice-${this.props.face} ${this.props.rolling && 'rolling'}`} />
            </div>
        )
    }
}

export default Die;