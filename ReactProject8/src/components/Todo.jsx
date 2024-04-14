import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos(){
    

    let todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return(
        <>
            <div className="w- flex flex-row flex-wrap">
                <ul className="list-none w-full ">
                    {   todos.map((todo)=>(
                            <li key = {todo.id}
                                className="h-28 m-2 border rounded-full bg-white drop-shadow-lg inline-flex p-1 flex-row items-center justify-evenly"
                                >
                                    <div className= " flex flex-wrap w-48 text-3xl p-7  overflow-y-hidden   rounded-full break-words">
                                        {todo.text}
                                    </div>
                                
                                
                                <button 
                                    onClick={()=>{dispatch(removeTodo(todo.id))}}
                                    className="bg-red-400  shadow-lg hover:bg-red-500 text-3xl p-3 m-2 rounded-full"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}    
                </ul>
                    
                
            </div>    
        </>
    )
}

export default Todos;