import React, { Component } from 'react';
import Coin from './Coin';

class Flipper extends Component {
    static defaultProps = {
        heads: 'https://tinyurl.com/react-coin-heads-jpg',
        tails: 'https://tinyurl.com/react-coin-tails-jpg'
    };
    constructor(props) {
        super(props);
        this.state = {
            coinFace: this.props.heads,
            headsCount: 0,
            tailsCount: 0
        };
    }

    flipCoin = () => {
        const flip = Math.floor(Math.random() * 2);
        if (flip === 0) {
            // heads
            this.setState(coin => ({
                coinFace: this.props.heads,
                headsCount: coin.headsCount + 1
            }));
        } else {
            // tails
            this.setState(coin => ({
                coinFace: this.props.tails,
                tailsCount: coin.tailsCount + 1
            }));
        }
    };

    handleClick = () => {
        this.flipCoin();
    };
    render() {
        return (
            <div>
                <Coin img={this.state.coinFace} />
                <button onClick={this.handleClick}>Flip Coin</button>
                <p>Coin flipped {this.state.headsCount + this.state.tailsCount} times.</p>
                <p>Heads: {this.state.headsCount}</p>
                <p>Tails: {this.state.tailsCount}</p>
            </div>
        );
    }
}

export default Flipper;
