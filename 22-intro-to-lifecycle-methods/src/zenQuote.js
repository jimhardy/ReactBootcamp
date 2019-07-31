import React, { Component } from 'react';
import axios from 'axios';
import './zenQuote.css';

class ZenQuote extends Component {
    state = { quote: '', isLoaded: false };
    componentDidMount() {
        setTimeout(() => {
            axios.get('https://api.github.com/zen').then(response => {
                console.log(response);
                this.setState({ quote: response.data, isLoaded: true });
            });
        }, 1000);
    }
    render() {
        return (
            <div>
                {this.state.isLoaded ? (
                    <div className="container">
                        <h2 className="appear">Always remember that...</h2>
                        <p>{this.state.quote}</p>
                    </div>
                ) : (
                    <div className="loader" />
                )}
            </div>
        );
    }
}

export default ZenQuote;
