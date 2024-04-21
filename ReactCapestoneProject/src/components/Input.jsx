import React, { useId } from "react";

// this component uses forward referance 

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    classname = "",
    ...props
},ref){

    // in this usecase this hook is not that important just for accessiblity purpose
    // this hook generate unique ID's every time it is used 
    const id = useId();
    
    return (
        <div classname ="w-full"> 
            { 
            
            label && <label className="inline-block mb-1 pl-1" htmlFor= {id}>
                {label}
            </label>

            }

            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-grey-50 duration-200 border border-gray-200 w-full ${classname}`}
                ref={ref}
            />
            
            
        </div>)
} )

export default Input;