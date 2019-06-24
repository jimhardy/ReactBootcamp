import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
    render() {
        return (
            <div className="Coin">
                <img src={this.props.img} alt="coin" />
            </div>
        );
    }
}

export default Coin;
