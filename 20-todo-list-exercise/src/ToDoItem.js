// item with amend, delete, and mark complete functions (mark complete prob just a class)
import React, { Component } from 'react';
import NewToDoForm from './NewToDoForm';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.handleSaveAmend = this.handleSaveAmend.bind(this);
    }
    state = {
        complete: false,
        amending: this.props.amending,
        id: this.props.id,
        toDo: this.props.value,
    };

    handleAmend = evt => {
        this.setState(currState => ({
            amending: true,
        }));
    };

    async handleSaveAmend(evt) {
        await this.setState(currState => ({
            amending: false,
            toDo: evt.toDo,
        }));
        // need to update state of original array
        await this.props.saveAmend(this.state);
    }

    handleDelete = evt => {
        console.log(evt);
        this.props.removeToDo(this.props.id);
    };

    render() {
        return (
            <div>
                {this.state.amending ? (
                    <NewToDoForm
                        saveToDo={this.handleSaveAmend}
                        toDo={this.state.toDo}
                    />
                ) : (
                    <p>
                        {this.state.toDo}
                        <span onClick={this.handleAmend}> (AMEND)</span>
                        <span onClick={this.handleDelete}> (DELETE)</span>
                    </p>
                )}
            </div>
        );
    }
}

export default ToDoItem;
