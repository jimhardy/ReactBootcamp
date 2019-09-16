import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

class Nav extends Component {
    state = {}
    render() {
        return (
            <div className='Nav'>
                <div className='Nav-header'>
                    <FontAwesomeIcon icon={faDog} />
                </div>
                <div >
                    <NavLink exact activeClassName="Nav-active" className='Nav-link' to='/'>Home</NavLink>
                    {this.props.dogs.map((dog, idx) => (
                        <NavLink exact activeClassName="Nav-active" className='Nav-link' to={`/dog/${dog.name}`} key={idx}>{dog.name}</NavLink>
                    ))}
                </div>
            </div>
        );
    }
}

export default Nav;