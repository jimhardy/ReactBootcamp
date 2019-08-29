import React, { Component } from 'react';
import { Link } from "react-router-dom";


class Sardines extends Component {
    state = {}
    render() {
        return (
            <div className="Sardines">
                <h1>I AM THE SARDINES PAGE</h1>
                <Link to="/">Go Back</Link>
            </div>
        );
    }
}

export default Sardines;