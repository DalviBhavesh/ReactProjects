import React from 'react';
import { ArrowUpRight } from 'lucide-react'
import { useTodo } from '../context';
import { useState } from 'react';


function Card({todo}){

    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);

    const {updateTodo, deleteTodo, toggleComplete} = useTodo();
    
    const editTodo = ()=>{
        updateTodo(todo.id, {...todo, todo: todoMsg });
        setIsTodoEditable(false);
    }

    const toggle = ()=>{
        toggleComplete(todo.id);
    }

    const remove = ()=>{
        deleteTodo(todo.id);
    }

    return (
        <>
            <div className="w-[300px] rounded-md border shadow-lg m-5 bg-white">
            
            <div className="p-4">
                <button 
                    className={`inline-flex shadow-md ${todo.completed ? "bg-lime-400 hover:bg-lime-600" : "bg-red-400 hover:bg-red-600"}  p-2 rounded-md items-center text-lg font-semibold`}
                    onClick={toggle}
                    >
                {todo.completed ? "TASK COMPLETED":"TASK PENDING"} &nbsp; <ArrowUpRight className="h-4 w-4" />
                </button>
                <textarea 
                    type='text' 
                    className="inline p-2 mt-3 w-64  text-3xl text-black font-bold "
                    value={todoMsg} 
                    onChange={(e)=>{setTodoMsg(e.target.value)}}
                    onClick={()=>{setIsTodoEditable(true)}}
                    readOnly={!isTodoEditable}
                    >
                </textarea>
                    
                    
                
                
                <button
                type="button"
                className="disabled:bg-gray-400 disabled:text-gray-700 disabled:border-gray-400 mt-4  w-32 rounded-md bg-black px-2 py-2 text-sm font-semibold text-white border border-black  shadow-md hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={editTodo}
                disabled={!isTodoEditable}
                >
                Update
                </button>

                <button
                type="button"
                className="mt-4 m-1 w-32 rounded-md bg-black px-2 py-2 text-sm font-semibold text-white border border-black  shadow-md hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                onClick={remove}
                >
                Delete
                </button>
            </div>
            </div>
        </>
      )
}

export default Card;