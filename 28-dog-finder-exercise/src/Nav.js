import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
                    <Link className='Nav-link' to='/'>Home</Link>
                    {this.props.dogs.map((dog, idx) => (
                        <Link className='Nav-link' to={`/dog/${dog.name}`} key={idx}>{dog.name}</Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default Nav;