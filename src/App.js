import './App.css';
import dataDB from '../src/data';
import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoList from './components/AddTodoList'

function App() {
  const [todos, setTodos] = useState(dataDB);
  const [text, setText] = useState('')

  console.log(todos)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
    if (text) {
      setTodos([
        ...todos,
        { id: new Date().getTime().toString(), text: text }
      ])
      setText("")
    }
  }
  return (
    <div className="container">
      <h1 >Todo List App</h1>
      {todos && todos.map((todo) => {
        return <TodoList key={todo.id} todo={todo} />
      })}
      <AddTodoList
        text={text}
        setText={setText}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
