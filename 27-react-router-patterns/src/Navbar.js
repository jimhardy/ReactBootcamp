import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    state = {}
    handleClick = () => {
        console.log('logged you in');
        this.props.history.push('/food/salmon');
    }

    handleBack = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className='Navbar'>
                <button onClick={this.handleClick}>Login</button>
                <button onClick={this.handleBack}>Go Back</button>
            </div>
        );
    }
}

export default withRouter(Navbar);