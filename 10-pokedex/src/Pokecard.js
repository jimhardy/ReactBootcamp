// card component
// import Pokedex from './Pokedex';
import React , {Component} from 'react';
import './Pokecard.css';

class Pokecard extends Component {
    render() {
        const id = this.props.img.toString().padStart(3, '0');
        const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`;
        return (
            <div className="Pokecard-card">
                <h2 className="Pokemon-name">{this.props.name}</h2>
                <img className="Pokemon-img" src={img} alt={this.props.name} />
                <p className="Pokemon-data">Type: {this.props.type}</p>
                <p className="Pokemon-data">EXP: {this.props.xp}</p>
            </div>
        );
    }
}

export default Pokecard;
