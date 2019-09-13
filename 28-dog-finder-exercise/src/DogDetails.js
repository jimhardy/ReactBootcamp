import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class DogDetails extends Component {
    state = {}
    render() {
        const dog = this.props.details[0];
        if (!dog) this.props.history.goBack();

        return (
            <div className='DogDetails'>
                <h1>I am a dog called {dog.name}</h1>
                <img src={dog.img} alt={dog.name} />
                <h2>Age: {dog.age}</h2>
                {dog.facts.map((fact, idx) =>
                    <h2 key={idx}>{fact}</h2>
                )}
            </div>
        );
    }
}

export default withRouter(DogDetails);