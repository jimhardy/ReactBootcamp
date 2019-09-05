import React, { Component } from 'react';

class Meal extends Component {
    state = {}
    render() {
        const foodName = this.props.match.params.foodName;
        const drinkName = this.props.match.params.drinkName;
        const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`
        const drinkUrl = `https://source.unsplash.com/1600x900/?${drinkName}`


        return (
            <div>
                <h1>THIS IS A MEAL</h1>
                <p>This is a meal of {foodName} + {drinkName}</p>
                <img src={foodUrl} alt={foodName} />
                <img src={drinkUrl} alt={drinkName} />
            </div>
        );
    }
}

export default Meal;