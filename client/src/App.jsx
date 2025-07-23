import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddToDoForm from './components/AddToDoForm';
import TodoItem from './components/ToDoItem';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get('/api/todos');
        setTodos(res.data);
      } catch (err) {
        console.error("Error fetching todos:", err);
      }
    };
    fetchTodos();
  }, []);

  const addTodo = async (text) => {
    try {
      const res = await axios.post('/api/todos', { text });
      const newTodo = res.data;
      setTodos([...todos, newTodo]);
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`/api/todos/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      console.error("Error deleting todo:", err);
    }
  };

  const toggleComplete = async (id) => {
    try {
      const res = await axios.put(`/api/todos/${id}`);
      const updatedTodo = res.data;
      setTodos(
        todos.map((todo) =>
          todo._id === id ? updatedTodo : todo
        )
      );
    } catch (err) {
      console.error("Error updating todo:", err);
    }
  };

  return (
    <div className="App">
      <h1>My To-Do App</h1>
      <AddToDoForm onAdd={addTodo} />

      <div className="todo-list">
        {todos.length > 0 ? (
          <ul>
            {todos.map((todo) => (
              <TodoItem
                key={todo._id}
                todo={todo}
                onDelete={deleteTodo}
                onToggleComplete={toggleComplete}
              />
            ))}
          </ul>
        ) : (
          <p>No tasks yet. Add one!</p>
        )}
      </div>
    </div>
  );
}

export default App;