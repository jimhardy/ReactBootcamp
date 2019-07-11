import React, { Component } from 'react';
import ShoppingListForm from './ShoppingListForm';
import uuid from 'uuid/v4';

class ShoppingList extends Component {
    state = {
        items: [
            { name: 'Milk', qty: '2 liters', id: uuid() },
            { name: 'Bread', qty: '2 loaves', id: uuid() }
        ]
    };
    addItem = item => {
        let newItem = {...item , id: uuid()};
        this.setState(state => ({
            // take all all items in current array, add new item, set new array into state
            items: [...state.items, newItem]
        }));
    };
    renderItems = () => {
        return (
            <ul>
                {this.state.items.map(item => (
                    <li key={item.id}>
                        {item.name}:{item.qty}
                    </li>
                ))}
            </ul>
        );
    };
    render() {
        return (
            <div>
                <h1>Shopping List</h1>
                {this.renderItems()}
                <ShoppingListForm addItem={this.addItem}/>
            </div>
        );
    }
}

export default ShoppingList;
