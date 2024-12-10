import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css'

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text };
        setTodos([...todos, newTodo]);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = (id, newText) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo)));
    };

    return (
        <div>
            <h1>Todo App</h1>
            <TodoForm onAdd={addTodo} />
            <TodoList todos={todos} onDelete={deleteTodo} onEdit={editTodo} />
        </div>
    );
};

export default App;
