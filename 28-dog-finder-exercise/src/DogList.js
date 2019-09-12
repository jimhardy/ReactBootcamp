import React, { Component } from 'react';

class DogList extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>ALL DOGS</h1>
                {this.props.dogDetails.map(dog =>
                    (
                        <h1>{dog.name}</h1>
                    )
                )}
            </div>
        );
    }
}

export default DogList;