import React, { Component } from 'react';
import LottoBall from './lottoBall';
import './lottoGame.css';

class LottoGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: []
        };
    }
    getValues = () => {
        this.setState({ numbers: [] });
        let newArr = [];
        // run randomNumber this.props.maxNum times, storing each value in array
        for (let i = 0; i < this.props.numBalls; i++) {
            newArr.push(this.randomNumber());
        }
        this.setState(this.stateSetter(newArr));
    };
    randomNumber = () => {
           return Math.floor(Math.random() * this.props.maxNum);
    };

    stateSetter = (n) => {
        return ({numbers: n});
    }

    render() {
        return (
            <div>
                <h1>Lottery!!</h1>
                <div className="LottoBalls">
                    {this.state.numbers.map(n => (
                        <LottoBall num={[n]} />
                    ))}
                </div>
                <button onClick={this.getValues}>Generate</button>
            </div>
        );
    }
}

export default LottoGame;
