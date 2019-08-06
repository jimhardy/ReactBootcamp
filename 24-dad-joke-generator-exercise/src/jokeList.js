import React, { Component } from 'react';
import axios from 'axios';
import Joke from './joke';

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
  }

  async componentDidMount() {
    let jokes = [];
    let jokeSet = new Set(jokes) || 0;
    while (jokeSet.size < this.props.numJokesToGet) {
      let res = await this.jokeGetter();
      const newJoke = { joke: { ...res.data, votes: 0 } };
      // console.log(newJoke);
      await jokes.push(newJoke);
      jokeSet = new Set(jokes);
    }

    this.setState({ jokes: [...jokeSet], loaded: true });
    console.log(this.state.jokes);
  }

  async jokeGetter() {
    return axios.get('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    });
  }

  handleVote = evt => {
    const updatedArr = this.state.jokes.map(jk => {
      if (jk.joke.id === evt.joke.id) {
        return { ...evt };
      }
      return jk;
    });
    this.setState({ jokes: updatedArr });
  };

  render() {
    return (
      <div className="JokeList">
        <h1>Generator</h1>
        {this.state.loaded ? (
          <div className="JoneList-Jokes">
            {this.state.jokes.map(jk => (
              // <div key={jk.id}>{jk.joke}</div>
              <Joke
                data={jk.joke}
                key={jk.joke.id}
                handleVote={this.handleVote}
              />
            ))}
          </div>
        ) : (
          <p>loading...</p>
        )}
      </div>
    );
  }
}

export default DadJokeGenerator;
