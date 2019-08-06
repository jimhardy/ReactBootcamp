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
        let jokes = [];
        while (jokes.length < this.props.numJokesToGet) {
            let res = await axios.get('https://icanhazdadjoke.com/', {
                headers: { Accept: 'application/json' },
            });
            console.log(res);
            jokes.push(res.data);
        }

        this.setState({ jokes: jokes, loaded: true });
        const check = new Set(jokes);
        console.log(check);
    }

    async jokeGetter() {
        return axios.get('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' },
        });
    }

    render() {
        return (
            <div className="JokeList">
                <h1>Max Joke Generator</h1>
                {this.state.loaded ? (
                    <div className="JoneList-Jokes">
                        {this.state.jokes.map(jk => (
                            // <div key={jk.id}>{jk.joke}</div>
                            <Joke joke={jk.joke} key={jk.id} />
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
