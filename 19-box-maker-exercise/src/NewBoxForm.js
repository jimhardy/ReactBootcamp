// form to create new box
// height , width , bg colour

import React, { Component } from 'react';

class NewBoxForm extends Component {
    state = {
        height: '',
        width: '',
        color: '',
    };
    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    };

    handleSubmit = evt => {
        evt.preventDefault();
        this.props.addNewBox(this.state);
        this.setState({
            height: '',
            width: '',
            color: '',
        });
    };

    render() {
        return (
            <div>
                <h2>Add New Box</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="height"
                        value={this.state.height}
                        onChange={this.handleChange}
                        placeholder="height"
                        id="height"
                    />
                    <input
                        type="text"
                        name="width"
                        value={this.state.width}
                        onChange={this.handleChange}
                        placeholder="width"
                        id="width"
                    />
                    <input
                        type="text"
                        name="color"
                        value={this.state.color}
                        onChange={this.handleChange}
                        placeholder="color"
                        id="color"
                    />
                    <button>Add New Box!</button>
                </form>
            </div>
        );
    }
}

export default NewBoxForm;
