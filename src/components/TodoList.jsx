import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'
import AddToList from '../components/AddTodoList';
import AddTodoList from '../components/AddTodoList';


const TodoList = ({ todo, removeTodo }) => {
    const { id, text } = todo;
    return (
        <>
            <article>
                <div className="todo-item">
                    <p>{text}</p>
                    <FaTrashAlt className="trash" onClick={() => { removeTodo(id) }} />
                </div>
            </article>


        </>
    )
}

export default TodoList;