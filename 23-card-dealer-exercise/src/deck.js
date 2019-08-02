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

        const cardObj = {
            ...card.data.cards[0],
            rotate: Math.floor(Math.random() * 50),
            right: Math.floor(Math.random() * 10),
            top: Math.floor(Math.random() * 10),
        };
        this.setState(st => ({
            drawnCards: [...st.drawnCards, cardObj],
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
                        rotate={card.rotate}
                        right={card.right}
                        top={card.top}
                    />
                ))}
                <button onClick={this.handleClick}>Draw Card!</button>
            </div>
        );
    }
}

export default Deck;
