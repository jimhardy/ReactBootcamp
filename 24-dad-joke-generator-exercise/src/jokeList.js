import React, { Component } from 'react';
import axios from 'axios';
import Joke from './joke';
import './jokeList.css';
import './App.css';

class DadJokeGenerator extends Component {
  static defaultProps = {
    numJokesToGet: 10
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
      loaded: false
    };
    this.jokeGetter = this.jokeGetter.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  async componentDidMount() {
    this.jokeGetter();
  }

  async jokeGetter() {
    this.setState({ loaded: false });
    let jokes = [];
    let jokeSet = new Set(jokes) || 0;
    while (jokeSet.size < this.props.numJokesToGet) {
      let res = await axios.get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' }
      });
      const newJoke = { joke: { ...res.data, votes: 0 } };
      await jokes.push(newJoke);
      jokeSet = new Set(jokes);
    }
    this.setState({ jokes: [...jokeSet], loaded: true });
  }

  async handleVote(data, delta) {
    const updatedArr = await this.state.jokes.map(jk => {
      if (jk.joke.id === data.id) {
        return { joke: { ...data, votes: jk.joke.votes + delta } };
      }
      return jk;
    });
    console.log(updatedArr);
    const sortedArr = this.jokeListSort(updatedArr);
    this.setState({ jokes: sortedArr });
  }

  jokeListSort = array => {
    const ordered = array.sort((a, b) => {
      if (a.joke.votes < b.joke.votes) {
        return 1;
      }
      if (a.joke.votes > b.joke.votes) {
        return -1;
      } else {
        return 0;
      }
    });
    return ordered;
  };

  render() {
    return (
      <div>
        {this.state.loaded ? (
          <div className="JokeList">
            <div className="JokeList-sidebar">
              <h1 className="JokeList-title">
                <span>Dad</span> Jokes
              </h1>
              <img
                src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
                alt="laughing emoji"
              />
              <button className="JokeList-getmore" onClick={this.jokeGetter}>
                New Jokes
              </button>
            </div>
            <div className="JokeList-jokes">
              {this.state.jokes.map(jk => (
                <Joke
                  data={jk.joke}
                  key={jk.joke.id}
                  votes={jk.joke.votes}
                  upvote={() => this.handleVote(jk.joke, 1)}
                  downvote={() => this.handleVote(jk.joke, -1)}
                />
              ))}
            </div>
          </div>
        ) : (
          <p>loading...</p>
        )}
      </div>
    );
  }
}

export default DadJokeGenerator;
