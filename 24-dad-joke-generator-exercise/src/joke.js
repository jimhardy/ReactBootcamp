import React, { Component } from 'react';

class DadJoke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joke: this.props.data
    };
    this.handleVote = this.handleVote.bind(this);
  }
  handleUpvote = evt => {
    console.log('upvote');
    this.handleVote(this.state, 1);
  };
  handleDownvote = evt => {
    console.log('downvote');
    this.handleVote(this.state, -1);
  };

  async handleVote(evt, vote) {
    const newVotes = (await this.state.joke.votes) + vote;
    await this.setState(joke => ({
      joke: { ...joke, votes: newVotes }
    }));
    console.log(this.state);
    this.props.handleVote(this.state.joke.joke);
  }
  render() {
    return (
      <li>
        <button onClick={this.handleUpvote}>upvote </button>{' '}
        <button onClick={this.handleDownvote}>downvote </button>
        {`${this.state.joke.joke} votes: ${this.state.joke.votes}`}
      </li>
    );
  }
}

export default DadJoke;
