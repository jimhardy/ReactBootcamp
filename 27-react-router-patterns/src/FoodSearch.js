import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodSearch extends Component {
    state = { query: '' }
    handleChange = (evt) => {
        this.setState({ query: evt.target.value })
    }
    render() {
        return (
            <div>
                <h1>Search for a food</h1>
                <input type='text' placeholder='search for food' value={this.state.query} onChange={this.handleChange} />
                <Link to={`/food/${this.state.query}`} >Go!</Link>
            </div>
        );
    }
}

export default FoodSearch;