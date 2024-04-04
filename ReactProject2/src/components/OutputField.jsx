import React, { useCallback, useRef } from "react";

function OutputField({pass="Password will be displayed here",len}){
    
    // useRef(default value) hook
    //assign the variable in the form of attribute to the tags you want to get reference of
    // eg: Input tag in aour case (ref = {passwordRef} )
    let passwordRef = useRef(null);

    //calback('fun to be optimised', [dependencies used by the fun]) hook is only used for optimisation and is a best practice 
    // following function can also work fine without callBack but not recomended !
    const copyToClipBoard = useCallback(()=>{
        
        //to give the blue highlight effect of copy 
        //'?' is used because current default value is null 
        //so when there is any value except null only then this function will execute(for optimisation) 
        passwordRef.current?.select();

        //to select a particular particular(optional feature)
        passwordRef.current?.setSelectionRange(0,len);
        
        //to copy password to clipboard
        window.navigator.clipboard.writeText(pass); 
    },[pass,len])


    
    return(
        <>
            <div className="mx-auto w-full px-2 pt-10 pb-10 lg:px-0">
                <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-evenly">
                    <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold text-black">Empowering Your Security<hr/></h2>
                    <p className="mt-2 text-gray-600">
                    One Strong Password at a Time. Safeguarding Your Digital World with Confidence and Ease.
                    </p>
                    </div>
                    <div className="mt-10 w-full md:w-1/2 lg:mt-0">
                    <form className="flex justify-center item-center">
                        <div className="flex flex-row flex-wrap justify-center w-full max-w-md items-center space-x-2">
                        <input
                            className="flex h-10 w-80 m-2 rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            value={pass}
                            ref={passwordRef}
                            readOnly
                        ></input>
                        <button
                            onClick={copyToClipBoard}
                            type="button"
                            className="m-0 rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            style={{margin:0}}
                        >
                            COPY
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OutputField;