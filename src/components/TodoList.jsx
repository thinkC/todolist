import React from 'react';
import { FaTrashAlt } from 'react-icons/fa'
import AddToList from '../components/AddTodoList';
import AddTodoList from '../components/AddTodoList';


const TodoList = ({ todo }) => {
    const { id, text } = todo;
    return (
        <>
            <article>
                <div className="todo-item">
                    <h2>{text}</h2>
                    <FaTrashAlt />
                </div>
            </article>


        </>
    )
}

export default TodoList;