import React, { Component } from 'react';


export default class lottoBall extends Component {
    render() {
        return (
            <div>
                <p className="Ball">{this.props.num}</p>
            </div>
        )
    }
}

