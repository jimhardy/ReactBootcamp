import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Message from './Message';



class Crisps extends Component {
    state = {}
    render() {
        return (
            <div className="Crisps">
                <Message>
                    <h1>I AM THE CRISPS PAGE</h1>
                </Message>
                <Message>
                    <Link to="/">Go Back</Link>
                </Message>
            </div>
        );
    }
}

export default Crisps;