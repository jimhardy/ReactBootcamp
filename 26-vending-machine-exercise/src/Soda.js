import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Message from './Message';



class Soda extends Component {
    state = {}
    render() {
        return (
            <div className="Soda">
                <Message>
                    <h1>I AM THE SODA PAGE</h1>
                </Message>
                <Message>
                    <Link to="/">Go Back</Link>
                </Message>
            </div>
        );
    }
}

export default Soda;