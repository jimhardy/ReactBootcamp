// item with amend, delete, and mark complete functions (mark complete prob just a class)
import React, { Component } from 'react';
import NewToDoForm from './NewToDoForm';

class ToDoItem extends Component {
    state = {
        complete: false,
        amending: this.props.amending,
        toDo: this.props.value,
    };

    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
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

    render() {
        return (
            <div>
                {this.state.amending ? (
                    <NewToDoForm
                        saveToDo={this.props.amendToDo}
                        toDo={this.state.toDo}
                        search={this.props.search}
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
