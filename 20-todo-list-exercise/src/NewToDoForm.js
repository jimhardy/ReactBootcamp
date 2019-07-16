// form to add new todo
import React, { Component } from 'react';

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
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="toDo"
                    value={this.state.toDo}
                    onChange={this.handleChange}
                    placeholder="To Do...."
                />
                {this.state.toDo !== '' ? <button>Save</button> : null}
            </form>
        );
    }
}

export default NewToDoForm;
