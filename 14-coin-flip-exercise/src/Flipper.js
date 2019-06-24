import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';

class Flipper extends Component {
    static defaultProps = {
        // heads: 'https://tinyurl.com/react-coin-heads-jpg',
        // tails: 'https://tinyurl.com/react-coin-tails-jpg'
        coins: [
            {
                side: 'heads',
                imgSrc: 'https://tinyurl.com/react-coin-heads-jpg'
            },
            {
                side: 'tails',
                imgSrc: 'https://tinyurl.com/react-coin-tails-jpg'
            }
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            coinFace: null,
            nHeads: 0,
            nTails: 0
        };
    }

    flipCoin = () => {
        // ORIGINAL SOLUTION
        // const flip = Math.floor(Math.random() * 2);
        // if (flip === 0) {
        //     // heads
        //     this.setState(coin => ({
        //         coinFace: this.props.coins[flip].imgSrc,
        //         nHeads: coin.nHeads + 1
        //     }));
        // } else {
        //     // tails
        //     this.setState(coin => ({
        //         coinFace: this.props.coins[flip].imgSrc,
        //         nTails: coin.nTails + 1
        //     }));
        // }

        // SOULTION 2
        const newCoin = choice(this.props.coins);
        this.setState(currSt => {
            let newState = {
                ...currSt,
                coinFace: newCoin,
                nHeads: currSt.nHeads + (newCoin.side === 'heads' ? 1 : 0),
                nTails: currSt.nHeads + (newCoin.side === 'tails' ? 1 : 0)
            };
            return newState;
        });
    };

    handleClick = () => {
        this.flipCoin();
    };
    render() {
        return (
            <div>
                {this.state.coinFace && <Coin data={this.state.coinFace} />}
                <button onClick={this.handleClick}>Flip Coin</button>
                <p>
                    Coin flipped {this.state.nHeads + this.state.nTails}{' '}
                    times.
                </p>
                <p>Heads: {this.state.nHeads}</p>
                <p>Tails: {this.state.nTails}</p>
            </div>
        );
    }
}

export default Flipper;
