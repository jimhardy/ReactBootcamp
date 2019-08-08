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

    async handleVote(id, vote) {
        const newVotes = (await this.state.joke.votes) + vote;
        await this.setState(st => ({
            joke: { ...st.joke, votes: newVotes },
        }));
        this.props.handleVote(this.state.joke);
    }
    render() {
        return (
            <div className="Joke">
                <div className="Joke-buttons">
                    <i
                        className="fas fa-arrow-up"
                        onClick={this.handleUpvote}
                    />
                    <span> {this.state.joke.votes} </span>

                    <i
                        className="fas fa-arrow-down"
                        onClick={this.handleDownvote}
                    />
                </div>
                <div className="Joke-text">{this.state.joke.joke}</div>
            </div>
        );
    }
}

export default DadJoke;
