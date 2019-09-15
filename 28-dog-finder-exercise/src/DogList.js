import React, { Component } from 'react';
import './DogList.css';
import { Link } from 'react-router-dom';

class DogList extends Component {
    state = {}
    render() {
        return (
            <div className='Doglist'>
                {this.props.details.map(dog =>
                    (
                        <div className='Doglist-dog'>
                            <Link to={`/dog/${dog.name}`}>
                                <h1>{dog.name}</h1>
                                <img src={dog.src} alt={dog.name} />
                            </Link>
                        </div>
                    )
                )}
            </div>
        );
    }
}

export default DogList;