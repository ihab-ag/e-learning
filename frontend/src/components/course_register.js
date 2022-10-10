import { useState } from "react";

const CourseRegister=()=>{
    const [name,setName]= useState('');
    const [message,setMessage]= useState('');
    const validate=()=>{
        if(name==='')
            setMessage('name cannot be empty');
    }
    return (
        <>
            <h1>Add Course</h1>
            <form className="form flex-column" onSubmit={validate}>
                <p>Course Name:</p>
                <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} className="input__text" />
                <input type="submit" value="submit" className="btn" />
            </form>
            <p>{message}</p>
        </>
    )
}

export default CourseRegister;