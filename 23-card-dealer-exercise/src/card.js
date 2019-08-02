import React, { Component } from 'react';
import './card.css';

class Card extends Component {
    render() {
        const style = {
            transform: `rotate(${this.props.rotate}deg)`,
            right: `${this.props.right}px`,
            top: `${this.props.top}px`,
        };
        return (
            <div className="card">
                <img
                    style={style}
                    src={this.props.imgUrl}
                    alt={this.props.card}
                />
            </div>
        );
    }
}

export default Card;
