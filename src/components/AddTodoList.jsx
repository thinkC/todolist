import React from 'react';

const AddToList = () => {

    return (
        <>
            <form className='search-form'>
                <div className='form-control'>
                    <input type="text" placeholder='add text' />


                    <button className='btn' type='submit'>Add</button>
                </div>
            </form>
        </>
    )
}

export default AddToList;