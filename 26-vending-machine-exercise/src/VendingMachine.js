import React, { Component } from 'react';
import { Link } from "react-router-dom";



class VendingMachine extends Component {
    state = {}
    render() {
        return (
            <div className="VendingMachine">
                <h1>I AM THE VENDING MACHINE PAGE</h1>
                <ul>
                    <li>
                        <Link to="/sardines">SARDINES</Link>
                    </li>
                    <li>
                        <Link to="/soda">SODA!</Link>
                    </li>
                    <li>
                        <Link to="/crisps">Crisps</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default VendingMachine;