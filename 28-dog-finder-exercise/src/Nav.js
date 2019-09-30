import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
} from 'reactstrap';

class DogFinderNavbar extends Component {
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar className='Nav' light expand="md">
                    <NavbarBrand className='Nav-header' href="/"><FontAwesomeIcon className='icon' icon={faDog} /></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <div >
                                {this.props.dogs.map((dog, idx) => (
                                    <NavLink exact activeClassName="Nav-active" className='Nav-link' to={`/dog/${dog.name}`} key={idx}>{dog.name}</NavLink>
                                ))}
                            </div>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}


export default DogFinderNavbar;