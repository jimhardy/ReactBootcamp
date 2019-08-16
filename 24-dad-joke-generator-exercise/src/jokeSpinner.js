import React, { Component } from 'react';

class Spinner extends Component {
    state = {};
    render() {
        return (
            <div className="JokeList-spinner">
                <i className="far fa-8x fa-laugh fa-spin" />
                <h1>loading....</h1>
            </div>
        );
    }
}
export default Spinner;
