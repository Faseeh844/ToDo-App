import React from 'react';

function TodoItem({ todo, onDelete, onToggleComplete }) {
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {/* The text is no longer clickable */}
      <span>{todo.text}</span>

      <div className="buttons">
        {/* The new "Complete" button */}
        <button onClick={() => onToggleComplete(todo._id)} className="complete-btn">
          ✓
        </button>
        {/* The existing "Delete" button */}
        <button onClick={() => onDelete(todo._id)} className="delete-btn">
          &times;
        </button>
      </div>
    </li>
  );
}

export default TodoItem;