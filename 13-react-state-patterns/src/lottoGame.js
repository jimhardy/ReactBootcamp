import React, { Component } from 'react';
import LottoBall from './lottoBall';
import './lottoGame.css';

class LottoGame extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        this.state = {
            numbers: Array.from({length: this.props.numBalls})
        };
    }
    handleClick = () => {
        this.getValues();
    }

    getValues = () => {
        // this.setState({ numbers: [] });
        // let newArr = [];
        // run randomNumber this.props.maxNum times, storing each value in array
        // for (let i = 0; i < this.props.numBalls; i++) {
        //     newArr.push(this.randomNumber());
        // }
        // use set state pattern to set numbers arr to newArr
        // this.setState(this.stateSetter(newArr));

        // solution method
        this.setState(curState => ({
            numbers: curState.numbers.map(
                n => this.randomNumber()
            )
        }))
    };

    randomNumber = () => {
           return Math.floor(Math.random() * this.props.maxNum) + 1;
    };

    // stateSetter = (n) => {
    //     return ({numbers: n});
    // }

    render() {
        return (
            <div className="LottoGame">
                <h1>{this.props.title}!!</h1>
                <div className="LottoBalls">
                    {this.state.numbers.map(n => (
                        <LottoBall num={n} />
                    ))}
                </div>
                <button onClick={this.handleClick}>Generate</button>
            </div>
        );
    }
}

export default LottoGame;
