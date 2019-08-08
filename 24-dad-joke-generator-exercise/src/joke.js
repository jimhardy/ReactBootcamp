import React, { Component } from 'react';

class DadJoke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: this.props.data,
        };
        this.handleVote = this.handleVote.bind(this);
    }
    handleUpvote = evt => {
        this.handleVote(this.state.joke, 1);
    };
    handleDownvote = evt => {
        this.handleVote(this.state.joke, -1);
    };

    async handleVote(evt, vote) {
        const newVotes = (await this.state.joke.votes) + vote;
        await this.setState(st => ({
            joke: { ...st.joke, votes: newVotes },
        }));
        this.props.handleVote(this.state.joke);
    }
    render() {
        return (
            <li>
                {`${this.state.joke.joke}  `}
                <button onClick={this.handleUpvote}>+</button>
                <span> {this.state.joke.votes} </span>
                <button onClick={this.handleDownvote}>-</button>
            </li>
        );
    }
}

export default DadJoke;
