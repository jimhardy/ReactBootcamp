// item with amend, delete, and mark complete functions (mark complete prob just a class)
import React, { Component } from 'react';
import NewToDoForm from './NewToDoForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

    handleToggleComplete = evt => {
        this.setState(currState => ({
            complete: !this.state.complete,
        }));
    };

    async handleSaveAmend(evt) {
        await this.setState(currState => ({
            amending: false,
            toDo: evt.toDo,
        }));
        this.props.saveAmend(this.state);
    }

    handleDelete = evt => {
        console.log(evt);
        this.props.removeToDo(this.props.id);
    };

    render() {
        return (
            <div className="ToDoItem">
                {this.state.amending ? (
                    <NewToDoForm
                        saveToDo={this.handleSaveAmend}
                        toDo={this.state.toDo}
                    />
                ) : (
                    <p
                        className={this.state.complete ? 'completed' : null}
                        onClick={this.handleToggleComplete}
                    >
                        {this.state.toDo}
                        <span onClick={this.handleAmend}>
                            {'  '}
                            <FontAwesomeIcon icon="edit" />
                        </span>
                        <span onClick={this.handleDelete}>
                            {'  '}
                            <FontAwesomeIcon icon="trash" />
                        </span>
                    </p>
                )}
            </div>
        );
    }
}

export default ToDoItem;
