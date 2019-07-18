import React from 'react';
import './App.css';
import ToDoList from './ToDoList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit, faSave } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash, faEdit, faSave);

function App() {
    return (
        <div className="App">
            <ToDoList className="ToDoList" />
        </div>
    );
}

export default App;
