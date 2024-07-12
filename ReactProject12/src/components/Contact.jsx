import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import { GrSend } from "react-icons/gr";

function Contact(){
    const form = useRef();
    
    
    const sendEmail = (e) => {
      e.preventDefault();
        if( form.current.user_name.value !== "" || form.current.user_email.value !== "" || form.current.message.value !== ""){
            emailjs
                .sendForm('service_3737nhe', 'template_4l2eka6', form.current, {
                publicKey: 'KjDMnh1wLC4sN3tyF',
                })
                .then(
                () => {
                    swal("Success!", "Message Sent to Bhavesh !", "success");
                    console.log('SUCCESS!');
                    form.current.user_name.value = "";
                    form.current.user_email.value = "";
                    form.current.message.value = "";
                },
                (error) => {
                    swal("Regret!", "Currently service unavailable !", "error");
                    console.log('FAILED...', error.text);
                },
            );
        }else{
            swal("Warning!", "Plz enter every field before submitting...", "warning");
        }
      
    };
  
    return (
        <>
            {/* <div className='bg-red-400 w-full h-lvh flex flex-col justify-center item-center'>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name" />
                    <label>Email</label>
                    <input type="email" name="user_email" />
                    <label>Message</label>
                    <textarea name="message" />
                    <input type="submit" value="Send" />
                </form>
            </div> */}
            <form  ref={form} onSubmit={sendEmail} className=' w-full h-full lg:h-lvh py-20 lg:py-0 flex flex-col justify-center items-center'>
                <div className='bg-orange-400x w-80 lg:w-1/2 h-20 m-2 flex justify-center items-center text-5xl font-bold'>DIRECT CONTACT ME</div>
                    
                <div className='bg-lime-300 border-4 border-black shadow-xl m-2 w-80 sm:w-1/2 p-2 h-fit lg:h-96 rounded-3xl flex flex-col lg:flex-row  justify-center items-center'>
                    
                    <div className='bg-green-400x m-2 p-2 w-full lg:w-1/2 h-full flex flex-col justify-center items-center'>
                        
                        <label className='w-full text-center text-xl font-bold py-1'>Your Name</label>
                        <input 
                            className='mb-4 px-7 w-full h-14 border-4 border-black rounded-full shadow-xl text-xl'
                            placeholder='Cristiano Ronaldo'
                            type="text" 
                            name="user_name" />
                        
                        <label className='w-full text-center text-xl font-bold py-1'>Your Email Id</label>
                        <input 
                            className='mb-4 px-7 w-full h-14 border-4 border-black rounded-full shadow-xl text-xl'
                            placeholder='cr7@gmail.com' 
                            type="email" 
                            name="user_email" />
                    
                    </div>
                    
                    <div className='bg-yellow-300x m-2 w-full lg:w-1/2 h-full flex flex-col justify-center items-center'>
                        <label className='w-full text-center text-xl font-bold py-1'>Message</label>
                        <textarea 
                            className=' p-5 w-full h-60 border-4 border-black rounded-xl shadow-xl text-xl' 
                            name="message"
                            placeholder='I am "The Greatest player of all time."' />
                    </div>

                </div>

                <div className=' w-80 lg:w-1/2 h-20 flex justify-center items-center text-3xl font-bold'>
                    <button
                        className='bg-black text-white w-44 h-14 flex justify-center items-center rounded-xl shadow-xl border-4 border-black hover:bg-white hover:text-black' 
                        type="submit" 
                        >
                            <GrSend className='me-4'/> 
                            SEND
                        </button>
                </div>

            </form>
        </>
        
      
    );
}
export default Contact;