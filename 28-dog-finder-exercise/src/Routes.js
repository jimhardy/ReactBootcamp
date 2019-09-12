import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';


class Routes extends Component {
    state = {}
    render() {
        return (
            <Switch>
                <Route exact path='/' render={(routeProps) => <DogList {...routeProps} />} />

                <Route render={() => <h1>404 not found</h1>} />
            </Switch>
        );
    }
}

export default Routes;