import React, { Component } from 'react';
import axios from 'axios';
import DadJoke from './dadJoke';

class DadJokeGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: new Array(10).fill(null),
      loaded: false
    };
    this.jokeGetter = this.jokeGetter.bind(this);
  }

  async componentDidMount() {
    const jokeArr = [];
    this.state.jokes.map(async joke => {
      joke = await this.jokeGetter().then(jk => jokeArr.push(jk));
    });
    this.setState(st => ({
      jokes: jokeArr,
      loaded: true
    }));
  }

  async jokeGetter() {
    return await axios.get('https://icanhazdadjoke.com/', {
      headers: { Accept: 'application/json' }
    });
  }

  render() {
    return (
      <div>
        <h1>Max Joke Generator</h1>
        {this.state.loaded ? (
          <ul>
            {this.state.jokes.map(joke => (
              <DadJoke joke={joke.data.joke} />
            ))}
          </ul>
        ) : (
          <h2>loading</h2>
        )}
      </div>
    );
  }
}

export default DadJokeGenerator;
