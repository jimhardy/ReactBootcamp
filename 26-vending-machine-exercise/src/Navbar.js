import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav className="Navbar">
                <NavLink exact activeClassName="Navbar-active" to='/'>Home</NavLink>
                <NavLink exact activeClassName="Navbar-active" to='/Sardines'>Sardines</NavLink>
                <NavLink exact activeClassName="Navbar-active" to='/Crisps'>Crisps</NavLink>
                <NavLink exact activeClassName="Navbar-active" to='/Soda'>Soda</NavLink>
            </nav>
        );
    }
}

export default Navbar;