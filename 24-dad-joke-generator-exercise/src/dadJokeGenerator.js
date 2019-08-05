import React, { Component } from 'react';
import axios from 'axios';

class DadJokeGenerator extends Component {
    static defaultProps = {
        nJokes: 10,
    };
    constructor(props) {
        super(props);
        this.state = {
            jokes: [],
        };
    }

    async componentDidMount() {
        const joke = await axios.get('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' },
        });

        console.log(joke);
    }

    render() {
        return (
            <div>
                <h1>Dad Joke Generator</h1>
            </div>
        );
    }
}

export default DadJokeGenerator;
