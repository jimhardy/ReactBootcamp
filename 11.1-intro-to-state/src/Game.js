import React, { Component } from 'react';

class Game extends Component {
    constructor(props) {
        // super() calls constructor in base component (react in this case)
        // pass in props if you want these to be available within the constructor
        // if you are just working with this.state, then you do not need to pass props into super()
        super(props);
        this.state = {
            score: 0,
            gameOver: false
        };
    }
    render() {
        return (
            <div>
                <h1>Your score is {this.state.score}</h1>
            </div>
        );
    }
}

export default Game;
