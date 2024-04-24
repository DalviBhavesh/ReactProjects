import React from 'react';
import {Controller } from 'react-hook-form';
import {Editor } from '@tinymce/tinymce-react';

function RTE({name, control, label, defaultValue = ""}){
    return(
        <>
            <div className='w-full'>
                {
                    label && <label className='inline-block mb-1 pl-1' >{label}</label>
                }

                <Controller
                    name={name || "content"}
                    control={control}
                    render={({field: {onChange}})=>(
                        <Editor
                            initialValue={defaultValue}
                            init={{
                                height: 500,
                                menubar: false,
                                plugins: [
                                    'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
                                    'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
                                    'save table contextmenu directionality emoticons template paste textcolor'
                                  ],
                                  toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons',
                                  content_style: "body { font-family:Helvetica, Arial, sans-serif; font-size:14px }"
                                }}
                            onEditorChange={onChange}
                        />
                            
                        
                    )}
                />
            </div>
        </>
    )
}

export default RTE;