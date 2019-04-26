import React, { useState } from 'react';

export default function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    >
      {todo.text}
      <div className="btn-div">
        <button className="adding-todo" onClick={() => completeTodo(index)}>
          {todo.isCompleted ? 'complted!!!' : 'done'}
        </button>
        <button className="remove" onClick={() => removeTodo(index)}>
          x
        </button>
      </div>
    </div>
  );
}
