import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FoodSearch extends Component {
    state = { query: '' }
    handleChange = (evt) => {
        this.setState({ query: evt.target.value })
    }

    handleClick = evt => {
        // do something
        console.log('Saved your food to db');
        // redirect
        this.props.history.push(`/food/${this.state.query}`);
    }

    render() {
        return (
            <div>
                <h1>Search for a food</h1>
                <input type='text' placeholder='search for food' value={this.state.query} onChange={this.handleChange} />
                <Link to={`/food/${this.state.query}`} >Go!</Link>
                <button onClick={this.handleClick}>Save New Food</button>
            </div>
        );
    }
}

export default FoodSearch;