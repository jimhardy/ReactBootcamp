import React, { Component } from 'react';
import axios from 'axios';
import './deck.css';
import Card from './card';

class Deck extends Component {
    state = {
        deckId: '',
        drawnCards: [],
    };
    async componentDidMount() {
        const deck = await axios.get(
            'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
        );
        this.setState({ deckId: deck.data.deck_id });
        console.log(deck.data);
    }

    drawCard = async () => {
        console.log('draw card!');
        const card = await axios.get(
            `https://deckofcardsapi.com/api/deck/${
                this.state.deckId
            }/draw/?count=1`
        );
        console.log(card.data.cards[0]);
        this.setState(st => ({
            drawnCards: [...st.drawnCards, card.data.cards[0]],
        }));
    };

    handleClick = () => {
        this.drawCard();
    };

    render() {
        return (
            <div>
                <h1>Card Dealer</h1>
                {this.state.drawnCards.map(card => (
                    <Card
                        imgUrl={card.image}
                        alt={`The ${card.value} of ${card.suit}`}
                    />
                ))}
                <button onClick={this.handleClick}>Draw Card!</button>
            </div>
        );
    }
}

export default Deck;
