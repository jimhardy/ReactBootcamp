import React, { Component } from 'react';

class Form extends Component {
    state = { username: '', email: '', password: '' };
    handleChange = evt => {
        this.setState({ [evt.target.name]: evt.target.value });
    };
    handleSubmit = evt => {
        evt.preventDefault();
        alert(`you typed ${this.state.username}`);
        this.setState({ username: '' });
    };
    render() {
        return (
            <div>
                <h1>Form Demo</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        placeholder="username"
                        id="username"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="email"
                        id="email"
                    />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="password"
                        id="password"
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;
