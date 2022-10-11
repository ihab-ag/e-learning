import { useState } from "react";
import { registerCourse } from "../hooks/course_register";
import { refresh } from "../hooks/refresh";

const CourseRegister=()=>{
    const [name,setName]= useState('');
    const [message,setMessage]= useState('');
    const validate= async (e)=>{
        e.preventDefault();
        if(name==='')
            setMessage('name cannot be empty');
        else{
            const data = new FormData;
            data.append("name",name);
            const res= await registerCourse(data);
            console.log(res);
            if(res && res.data.status==200){
                setMessage('Added');
                refresh();
            }
        }
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