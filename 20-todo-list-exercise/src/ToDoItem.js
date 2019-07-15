// item with amend, delete, and mark complete functions (mark complete prob just a class)
import React, { Component } from 'react';

class ToDoItem extends Component {
    state = {
        complete: false,
        amending: false,
    };

    handleAmend = evt => {
        this.setState(currState => ({
            amending: true,
        }));
    };

    handleDelete = evt => {
        console.log(evt);
        this.props.removeToDo(this.props.id);
    };

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.saveToDo(this.state);
        this.setState({
            amending: false,
        });
    };

    render() {
        return (
            <div>
                {this.state.amending ? (
                    <span>
                        {' '}
                        <input type="text" value={this.props.value} /> (SAVE)
                    </span>
                ) : (
                    <p>
                        {this.props.value}
                        <span onClick={this.handleAmend}> (AMEND)</span>
                        <span onClick={this.handleDelete}> (DELETE)</span>
                    </p>
                )}
            </div>
        );
    }
}

export default ToDoItem;
