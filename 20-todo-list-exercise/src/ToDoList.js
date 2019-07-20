// needs to contain all todos in array
// renders todo item components with functionality
// new todo form for adding new
import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import NewToDoForm from './NewToDoForm';
import uuid from 'uuid/v4';
import './ToDoList.css';

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

    saveAmend = evt => {
        // let newArr = [...this.state.toDos];
        // const target = newArr.filter(todo => {
        //     return todo.id === evt.id;
        // });
        // const index = newArr.indexOf(target[0]);
        // newArr[index] = evt;
        // this.setState(currState => ({
        //     toDos: newArr,
        // }));

        // Solution with map instead of filter and indexOf
        const updatedArr = this.state.toDos.map(todo => {
            if (todo.id === evt.id) {
                console.log(evt);
                return { ...evt };
            }
            return todo;
        });
        this.setState({ toDos: updatedArr });
    };

    removeToDo = id => {
        // used in item - remove todo
        const newArr = this.state.toDos.filter(todo => {
            return todo.id !== id;
        });
        this.setState(currState => ({
            toDos: newArr,
        }));
    };

    render() {
        return (
            <div className="ToDoListContainer">
                <h1>To Do List</h1>
                <div className="ToDoList">
                    {this.state.toDos.map(item => (
                        <ToDoItem
                            value={item.toDo}
                            amendToDo={this.amendToDo}
                            removeToDo={this.removeToDo}
                            key={item.id}
                            id={item.id}
                            saveToDo={this.saveToDo}
                            saveAmend={this.saveAmend}
                            search={item}
                        />
                    ))}
                </div>
                <NewToDoForm saveToDo={this.saveToDo} toDo="" />
            </div>
        );
    }
}

export default ToDoList;
