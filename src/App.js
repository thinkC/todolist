import './App.css';
import dataDB from '../src/data';
import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoList from './components/AddTodoList'

function App() {
  const [todos, setTodos] = useState(dataDB);
  const [text, setText] = useState('')

  // console.log(todos[0].text)

  //function 
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

  const removeTodo = (id) => {
    // console.log(id)
    let tempTodos = [...todos];
    const removedItem = tempTodos.filter((item) => item.id !== id);
    setTodos(removedItem);
  }
  return (
    <div className="container">
      <h1 >Todo List App Web App</h1>
      {/* {todos && todos.map((todo) => {
        return <TodoList key={todo.id} todo={todo} removeTodo={removeTodo} />
      })} */}

      <TodoList todos={todos} removeTodo={removeTodo} />
      <AddTodoList
        text={text}
        setText={setText}
        handleSubmit={handleSubmit}
        todos={todos}
      />
    </div>
  );
}

export default App;
