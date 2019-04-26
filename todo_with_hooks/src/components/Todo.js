import React, { useState } from 'react';

export default function Todo({
  todo,
  index,
  completeTodo,
  removeTodo,
  handleToggle,
}) {
  return (
    <div className="todo">
      {todo.text}
      <div className="btn-div">
        <button
          style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
          type="button"
          className="adding-todo"
          onClick={() => completeTodo(index)}
          handleToggle={() => handleToggle(index)}
        >
          {todo.isCompleted ? 'complted!!!' : 'done'}
        </button>
        <button
          type="button"
          className="remove"
          onClick={() => removeTodo(index)}
        >
          x
        </button>
      </div>
    </div>
  );
}
