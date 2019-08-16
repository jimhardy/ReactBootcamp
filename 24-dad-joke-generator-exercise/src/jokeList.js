import React, { Component } from 'react';
import axios from 'axios';
import Joke from './joke';
import Spinner from './jokeSpinner';
import './jokeList.css';
import './App.css';
import FlipMove from 'react-flip-move';

class DadJokeGenerator extends Component {
    static defaultProps = {
        numJokesToGet: 10,
    };
    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
            loaded: false,
        };
        this.seenJokes = new Set(this.state.jokes.map(jk => jk.joke.joke));
        this.getJokes = this.getJokes.bind(this);
        this.handleVote = this.handleVote.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {
        if (this.state.jokes.length === 0) {
            this.getJokes();
        } else {
            this.setState({ loaded: true });
        }
    }

    async getJokes() {
        this.setState({ loaded: false });
        try {
            let jokes = [];
            let jokeSet = new Set(jokes) || 0;
            while (jokeSet.size < this.props.numJokesToGet) {
                let res = await axios.get('https://icanhazdadjoke.com/', {
                    headers: { Accept: 'application/json' },
                });

                const newJoke = { joke: { ...res.data, votes: 0 } };
                if (
                    !this.seenJokes.has(newJoke.joke.joke) &&
                    !jokeSet.has(newJoke)
                ) {
                    await jokes.push(newJoke);
                    jokeSet = new Set(jokes);
                    console.log(jokeSet);
                } else {
                    console.log('duplicate found');
                    console.log(newJoke);
                }
            }
            await this.setState(
                st => ({
                    jokes: [...st.jokes, ...jokeSet],
                    loaded: true,
                }),

                await window.localStorage.setItem(
                    'jokes',
                    JSON.stringify(jokes)
                )
            );
        } catch (err) {
            console.log(err);
            this.setState({ loaded: true });
        }
    }

    async handleVote(data, delta) {
        const updatedArr = await this.state.jokes.map(jk => {
            if (jk.joke.id === data.id) {
                return { joke: { ...data, votes: jk.joke.votes + delta } };
            }
            return jk;
        });
        const sortedArr = this.jokeListSort(updatedArr);
        await this.setState({ jokes: sortedArr });
        await window.localStorage.setItem(
            'jokes',
            JSON.stringify(this.state.jokes)
        );
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

    handleClick() {
        this.getJokes();
    }

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
                            <button
                                className="JokeList-getmore"
                                onClick={this.handleClick}
                            >
                                New Jokes
                            </button>
                        </div>
                        <div className="JokeList-jokes">
                            <FlipMove>
                                {this.state.jokes.map(jk => (
                                    <Joke
                                        data={jk.joke}
                                        key={jk.joke.id}
                                        votes={jk.joke.votes}
                                        upvote={() =>
                                            this.handleVote(jk.joke, 1)
                                        }
                                        downvote={() =>
                                            this.handleVote(jk.joke, -1)
                                        }
                                    />
                                ))}
                            </FlipMove>
                        </div>
                    </div>
                ) : (
                    <Spinner />
                )}
            </div>
        );
    }
}

export default DadJokeGenerator;
