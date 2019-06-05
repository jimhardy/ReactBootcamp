// card component
import Pokedex from './Pokedex';
import React from 'react';


class Pokecard extends React.Component {
    render(){
        return(
                <div>
                    <h1>{this.props.name}</h1>
                    <p>{this.props.type}</p>
                    <p>{this.props.xp}</p>
                    <p>{this.props.img}</p>
                </div>
            );
    }
}

export default Pokecard;