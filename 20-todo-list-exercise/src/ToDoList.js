// needs to contain all todos in array
// renders todo item components with functionality
// new todo form for adding new
import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import NewToDoForm from './NewToDoForm';
import uuid from 'uuid/v4';

class ToDoList extends Component {
    state = {
        toDos: [
            { toDo: 'Eat breakfast', id: uuid() },
            { toDo: 'Drink Coffee', id: uuid() },
            { toDo: 'Code', id: uuid() },
            { toDo: 'Video Games', id: uuid() },
            { toDo: 'Code', id: uuid() },
        ],
    };

    saveToDo = evt => {
        // used in form - add new todo
        const newToDo = { ...evt, id: uuid() };
        this.setState(currState => ({
            toDos: [...currState.toDos, newToDo],
        }));
    };

    amendToDo = evt => {
        // used in item - amend todo
        console.log('amend todo');
        console.log(evt);
    };

    removeToDo = evt => {
        // used in item - remove todo
        const newArr = this.state.toDos.filter(todo => {
            return todo.id !== evt;
        });
        this.setState(currState => ({
            toDos: newArr,
        }));
    };

    render() {
        return (
            <div>
                <h1>To Do List</h1>
                {this.state.toDos.map(item => (
                    <ToDoItem
                        value={item.toDo}
                        amendToDo={this.amendToDo}
                        removeToDo={this.removeToDo}
                        key={item.id}
                        id={item.id}
                        addToDo={this.saveToDo}
                    />
                ))}
                <NewToDoForm addToDo={this.saveToDo} />
            </div>
        );
    }
}

export default ToDoList;
