import React, { Component } from 'react';

class Dog extends Component {
    state = {}
    render() {
        return (
            <div className='Dog'>
                <h1>I am a dog called {this.props.stats.name}</h1>
                <img src={this.props.stats.img} />
                <h2>Age: {this.props.stats.age}</h2>
                {this.props.stats.facts.map(i =>
                    <h2>{this.props.stats.name} fact: {i}</h2>
                )}
            </div>
        );
    }
}

export default Dog;