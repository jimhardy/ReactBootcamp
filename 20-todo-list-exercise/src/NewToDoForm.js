// form to add new todo
import React, { Component } from 'react';

class NewToDoForm extends Component {
    state = {
        toDo: '',
    };

    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.addToDo(this.state);
        this.setState({
            toDo: '',
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    name="toDo"
                    value={this.state.toDo}
                    onChange={this.handleChange}
                />
                <button>Save</button>
            </form>
        );
    }
}

export default NewToDoForm;
