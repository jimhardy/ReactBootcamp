import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Crisps extends Component {
    state = {}
    render() {
        return (
            <div className="Crisps">
                <h1>I AM THE CRISPS PAGE</h1>
                <Link to="/">Go Back</Link>
            </div>
        );
    }
}

export default Crisps;