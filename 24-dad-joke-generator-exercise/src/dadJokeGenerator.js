import React, { Component } from 'react';
import axios from 'axios';

class DadJokeGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: new Array(10).fill(null),
            joke: '',
        };
        this.jokeGetter = this.jokeGetter.bind(this);
    }

    async componentDidMount() {
        const jokeArr = await this.state.jokes.map(async joke => {
            joke = await this.jokeGetter();
        });
        await this.setState(st => ({
            jokes: jokeArr,
        }));
    }

    async jokeGetter() {
        return await axios.get('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' },
        });
    }

    render() {
        return (
            <div>
                <h1>Max Joke Generator</h1>
                <h2>{this.state.joke}</h2>
            </div>
        );
    }
}

export default DadJokeGenerator;
