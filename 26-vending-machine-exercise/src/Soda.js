import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Soda extends Component {
    state = {}
    render() {
        return (
            <div className="Soda">
                <h1>I AM THE SODA PAGE</h1>
                <Link to="/">Go Back</Link>
            </div>
        );
    }
}

export default Soda;