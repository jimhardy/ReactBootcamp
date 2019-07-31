import React, { Component } from 'react';
import axios from 'axios';

class GithubUserInfo extends Component {
    state = { imgUrl: '', name: '' };
    async componentDidMount() {
        let response = await axios.get(
            `http://api.github.com/users/${this.props.username}`
        );
        console.log(response.data);
        let data = response.data;
        this.setState({ imgUrl: data.avatar_url, name: data.name });
    }
    render() {
        return (
            <div>
                <h1>GITHUB USER INFO: {this.state.name}</h1>
                <img src={this.state.imgUrl} alt={this.state.name} />
            </div>
        );
    }
}

export default GithubUserInfo;
