import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './DogDetails.css';


class DogDetails extends Component {
    state = {}
    render() {
        const dog = this.props.details[0];
        if (!dog) this.props.history.goBack();

        return (
            <div className='DogDetails'>
                <div className='DogDetails-content'>
                    <h1>{dog.name}</h1>
                    <div className='DogDetails-content2'>
                        <img src={dog.src} alt={dog.name} />
                        <h2>Age: {dog.age}</h2>
                        <div className='DogDetails-facts'>
                            {dog.facts.map((fact, idx) =>
                                <h2 key={idx}>{fact}</h2>
                            )}
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default withRouter(DogDetails);