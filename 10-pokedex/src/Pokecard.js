// card component
import Pokedex from './Pokedex';
import React from 'react';
import './Pokecard.css';

class Pokecard extends React.Component {
    render() {
        const id = this.props.img.toString().padStart(3, '0');
        const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
        return (
            <div>
                <h2 className="Pokemon_Name">{this.props.name}</h2>
                <img className="Pokemon_Img" src={img} alt={this.props.name} />
                <p className="Pokemon_Type">Type: {this.props.type}</p>
                <p className="Pokemon_EXP">EXP: {this.props.xp}</p>
            </div>
        );
    }
}

export default Pokecard;
