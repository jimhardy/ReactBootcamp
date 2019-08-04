import React, { Component } from 'react';
import axios from 'axios';
import './deck.css';
import Card from './card';

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

class Deck extends Component {
    constructor(props) {
        super(props);
        this.reset = this.reset.bind(this);
    }
    state = {
        deckId: null,
        drawnCards: [],
        remaining: 52,
    };
    async componentDidMount() {
        const deck = await axios.get(
            `${API_BASE_URL}/new/shuffle/?deck_count=1`
        );
        this.setState({ deckId: deck.data.deck_id });
    }

    drawCard = async () => {
        try {
            const card = await axios.get(
                `${API_BASE_URL}/${this.state.deckId}/draw/?count=1`
            );
            console.log(card);
            const cardObj = {
                ...card.data.cards[0],
                rotate: Math.floor(Math.random() * 50),
                right: Math.floor(Math.random() * 30),
                top: Math.floor(Math.random() * 30),
            };
            this.setState(st => ({
                drawnCards: [...st.drawnCards, cardObj],
                remaining: card.data.remaining,
            }));
        } catch (err) {
            alert(err);
        }
    };

    async reset() {
        const deck = await axios.get(
            `${API_BASE_URL}/new/shuffle/?deck_count=1`
        );
        await this.setState(st => ({
            deckId: deck.data.deck_id,
            drawnCards: [],
            remaining: 52,
        }));
    }

    handleClick = () => {
        this.state.remaining > 0 ? this.drawCard() : this.reset();
    };

    render() {
        return (
            <div className="dealer">
                <h1>Card Dealer</h1>
                {this.state.remaining > 0 ? (
                    <button className="button" onClick={this.handleClick}>
                        Draw Card!
                    </button>
                ) : (
                    <button className="button" onClick={this.handleClick}>
                        No Cards Remaining! Redeal?
                    </button>
                )}
                <div className="deck">
                    {this.state.drawnCards.map(card => (
                        <Card
                            imgUrl={card.image}
                            alt={`The ${card.value} of ${card.suit}`}
                            rotate={card.rotate}
                            right={card.right}
                            top={card.top}
                            key={card.code}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Deck;
