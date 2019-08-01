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
        this.props.removeToDo(this.props.id);
    };

    componentDidUpdate(prevProps, prevState) {
        // console.log('todo component updated!');
        // console.log(prevState.toDo);
        // console.log(this.state.toDo);
    }

    componentWillUnmount() {
        console.log('component unmount');
    }

    render() {
        return (
            <div className="ToDoItems">
                {this.state.amending ? (
                    <NewToDoForm
                        saveToDo={this.handleSaveAmend}
                        toDo={this.state.toDo}
                    />
                ) : (
                    <div className="ToDoItemContainer">
                        <div
                            className={
                                this.state.complete
                                    ? 'completed ToDoItem'
                                    : 'ToDoItem'
                            }
                            onClick={this.handleToggleComplete}
                        >
                            {this.state.toDo}
                        </div>
                        <div
                            onClick={this.handleAmend}
                            className="ToDoItemButton ToDoItem"
                        >
                            <FontAwesomeIcon icon="edit" />
                        </div>
                        <div
                            onClick={this.handleDelete}
                            className="ToDoItemButton ToDoItem"
                        >
                            <FontAwesomeIcon icon="trash" />
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default ToDoItem;
