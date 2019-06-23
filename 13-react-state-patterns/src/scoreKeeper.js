import React, { Component } from 'react';

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = { score: 0 };
    }
    singleKill = () => {
        // this technically works in this situation, but should be avoided
        // use callback pattern as with tripleKill()
        this.setState({ score: this.state.score + 1 });
    };
    tripleKill = () => {
        // state callback function - ensures that current state is referenced
        // if we did 3 of the standard setstate as in single kill, it would only take the last value
        // this.setState(currentState => ({score: currentState.score + 1}));
        // this.setState(currentState => ({score: currentState.score + 1}));
        // this.setState(currentState => ({score: currentState.score + 1}));

        // cleaner method is to move the function into a seperate function instead of inline.
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
        this.setState(this.incrementScore);
    };

    incrementScore(currentState) {
        return { score: currentState.score + 1 };
    }

    render() {
        return (
            <div>
                <h1>score is: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill</button>
                <button onClick={this.tripleKill}>Triple Kill</button>
            </div>
        );
    }
}

export default ScoreKeeper;
