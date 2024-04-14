import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

function AddTodo(){

    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    
    

    const addTodoHandler = (e)=>{
        e.preventDefault();

        dispatch(addTodo(input));
        setInput('');
    }

    return(
        <>
            <form 
                onSubmit={addTodoHandler} 
                className='flex flex-col justify-center items-center flex-wrap'
            >

                <h1 className='w-full p-2 text-white text-pretty drop-shadow-md font-bold text-7xl font'>React-Redux Practice</h1>
                <input 
                    type="text"
                    value={input}
                    placeholder='Enter words'
                    className='w-5/6 m-2 p-2 border border-white shadow-md rounded-full ps-7'
                    onChange={(e)=>{setInput(e.target.value)}} 
                />

                <button 
                    className='bg-black w-32 text-white p-2 m-2 shadow-md hover:bg-gray-800  border-white border-2 rounded-full'
                    type="submit"
                >
                        Save
                </button>

            </form>
           
            
        </>
    )
}

export default AddTodo;