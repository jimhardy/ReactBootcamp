// item with amend, delete, and mark complete functions (mark complete prob just a class)
import React, { Component } from 'react';

class ToDoItem extends Component {
    state = { complete: false };
    render() {
        return (
            <div>
                <p>
                    {this.props.toDo}
                    <span> (ADD)</span>
                    <span> (DELETE)</span>
                </p>
            </div>
        );
    }
}

export default ToDoItem;
