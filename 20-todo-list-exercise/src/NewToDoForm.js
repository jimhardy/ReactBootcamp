// form to add new todo
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NewToDoForm extends Component {
    state = {
        toDo: this.props.toDo,
    };

    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        if (this.state.toDo !== '') {
            this.props.saveToDo(this.state);
            this.setState({
                toDo: '',
            });
        }
    };

    render() {
        return (
            <form
                onSubmit={this.handleSubmit}
                className="NewToDoForm ToDoItemContainer"
            >
                <input
                    type="text"
                    name="toDo"
                    value={this.state.toDo}
                    onChange={this.handleChange}
                    placeholder="To Do...."
                    className="FormItem"
                />

                {this.state.toDo !== '' ? (
                    <button className="FormItem">
                        <FontAwesomeIcon icon="save" />
                    </button>
                ) : (
                    <button className="FormItem" disabled>
                        <FontAwesomeIcon icon="save" />
                    </button>
                )}
            </form>
        );
    }
}

export default NewToDoForm;
