import React, { Component } from 'react';
import Coin from './Coin';

class Flipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            img: this.heads
        };
        this.heads = 'https://tinyurl.com/react-coin-heads-jpg';
        this.tails = 'https://tinyurl.com/react-coin-tails-jpg';
    }

    flipCoin = () => {
        console.log('coin flipped');
        const flip = Math.floor(Math.random() * 2);
        if(flip === 0) {
            // heads
        } else {
            // tails
        }
        
    }

    handleClick = () => {
        this.flipCoin();
    }
    render() {
        return (
            <div>
                <Coin img={this.state.img} />
                <button onClick={this.handleClick}>Flip Coin</button>
            </div>
        );
    }
}

export default Flipper;
