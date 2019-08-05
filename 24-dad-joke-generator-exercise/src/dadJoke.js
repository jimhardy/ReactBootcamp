import React, { Component } from 'react';

class DadJoke extends Component {
  state = { votes: 0 };
  render() {
    return <li>{this.props.joke}</li>;
  }
}

export default DadJoke;
