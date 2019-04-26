import React, { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'go and train', isCompleted: false },
    { text: 'get some food', isCompleted: false },
    { text: 'code code code!', isCompleted: false },
    { text: 'get out with the dog', isCompleted: false },
  ]);

  const handleToggle = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = false;
  };
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="app container col-12">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            handleToggle={handleToggle}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
