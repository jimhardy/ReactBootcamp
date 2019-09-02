import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Message from './Message';


class Sardines extends Component {
    state = {}
    render() {
        return (
            <div className="Sardines">
                <Message>
                    <h1>I AM THE SARDINES PAGE</h1>
                </Message>
                <Message>
                    <Link to="/">Go Back</Link>
                </Message>
            </div>
        );
    }
}

export default Sardines;