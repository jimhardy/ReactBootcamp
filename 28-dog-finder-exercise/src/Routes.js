import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';


class Routes extends Component {
    state = {}
    render() {
        return (
            <Switch>
                <Route exact path='/' render={(routeProps) => <DogList details={this.props.dogs} {...routeProps} />} />
                <Route exact path='/dog/:name' render={(routeProps) =>
                    <DogDetails details={
                        this.props.dogs.filter(dog =>
                            dog.name.toLowerCase() === routeProps.match.params.name.toLowerCase())}
                        {...routeProps} />} />

                <Route render={() => <h1>404 not found</h1>} />
            </Switch>
        );
    }
}

export default Routes;

