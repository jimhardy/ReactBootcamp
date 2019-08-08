import React, { Component } from 'react';
import axios from 'axios';
import Joke from './joke';

class DadJokeGenerator extends Component {
    static defaultProps = {
        numJokesToGet: 10,
    };
    constructor(props) {
        super(props);
        this.state = {
            jokes: [],
            loaded: false,
        };
        this.jokeGetter = this.jokeGetter.bind(this);
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
                headers: { Accept: 'application/json' },
            });
            const newJoke = { joke: { ...res.data, votes: 0 } };
            await jokes.push(newJoke);
            jokeSet = new Set(jokes);
        }
        this.setState({ jokes: [...jokeSet], loaded: true });
    }

    handleVote = evt => {
        const updatedArr = this.state.jokes.map(jk => {
            if (jk.joke.id === evt.id) {
                return { joke: evt };
            }
            return jk;
        });
        const sortedArr = this.jokeListSort(updatedArr);
        this.setState({ jokes: sortedArr });
    };

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
            <div className="JokeList">
                <div className="JokeList-sidebar">
                    <h1>
                        <span>Dad</span> Jokes
                    </h1>
                    <img src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg" />
                    <button onClick={this.jokeGetter}>Get More Jokes</button>
                </div>
                {this.state.loaded ? (
                    <div className="JokeList-jokes">
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
