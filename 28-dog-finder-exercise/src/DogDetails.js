import React, { Component } from 'react';

class DogDetails extends Component {
    state = {}
    render() {
        const dog = this.props.details;
        return (
            <div className='DogDetails'>
                {/* <h1>I am a dog called {dog.name}</h1>
                <img src={dog.img} alt={dog.name} />
                <h2>Age: {dog.age}</h2>
                {dog.facts.map(i =>
                    <h2>{dog.name} fact: {i}</h2>
                )} */}
            </div>
        );
    }
}

export default DogDetails;