import './App.css';
import dataDB from '../src/data';
import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoList from './components/AddTodoList'

function App() {
  const [todos, setTodo] = useState(dataDB);
  console.log(todos)
  return (
    <div className="container">
      <h1 >Todo List App</h1>
      {todos && todos.map((todo) => {
        return <TodoList key={todo.id} todo={todo} />
      })}
      <AddTodoList />
    </div>
  );
}

export default App;
