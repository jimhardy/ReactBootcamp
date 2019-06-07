// card component
import Pokecard from './Pokecard';
import React, { Component } from 'react';
import './Pokedex.css';

// Array of all pokemon

class Pokedex extends Component {
    render() {
        let title;
        if(this.props.isWinner){
            title = <h1 className="Pokedex-winner">Winning Hand!!</h1>
        } else {
            title = <h1 className="Pokedex-loser">Losing hand...</h1>
        }
        return (
            <div className="Pokedex">
                {title}
                <h4>Total Experience: {this.props.exp}</h4>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map(pokemon => (
                            <Pokecard
                                name={pokemon.name}
                                type={pokemon.type}
                                xp={pokemon.base_experience}
                                img={pokemon.id}
                            />
                    ))}
                </div>
            </div>
        );
    }
}

export default Pokedex;
