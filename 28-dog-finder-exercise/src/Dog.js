import React, { Component } from 'react';

class Dog extends Component {
    state = {}
    render() {
        return (
            <div className='Dog'>
                <h1>I am a dog called {this.props.name}</h1>
                <img src={this.props.img} />
                <h2>Age: {this.props.age}</h2>
                {this.props.facts.map(i => {
                    <h2>{this.props.name} fact: {i}</h2>
                })}
            </div>
        );
    }
}

export default Dog;