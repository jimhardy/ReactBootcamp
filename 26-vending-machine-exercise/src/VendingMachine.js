import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Message from './Message';



class VendingMachine extends Component {
    state = {}
    render() {
        return (
            <div className="VendingMachine">
                <Message>
                    <h1>I AM THE VENDING MACHINE PAGE</h1>
                </Message>
                <Message>
                    <div className="VendingMachine-list">
                        <Link to="/sardines">Sardines</Link>
                        <Link to="/soda">Soda</Link>
                        <Link to="/crisps">Crisps</Link>
                    </div>
                </Message>
            </div>
        );
    }
}

export default VendingMachine;