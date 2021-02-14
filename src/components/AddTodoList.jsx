import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddToList = ({ text, setText, handleSubmit }) => {


    return (
        <>
            <form onSubmit={handleSubmit} className='search-form'>
                <div className='form-control'>
                    <input type="text"
                        placeholder='add todo'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />


                    <button className='btn' type='submit'>
                        <FaPlus className="plus" />  add task

                    </button>
                </div>
            </form>
        </>
    )
}

export default AddToList;