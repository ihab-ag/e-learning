import { useState } from "react"
import { addAssignment } from "../hooks/add_assignment";

const AssignmentRegister =({courses})=>{
    const [name,setName]= useState('');
    const [text,setText]= useState('');
    const [course,setCourse]= useState('');
    const sendReq=(e)=>{
        e.preventDefault()
        const data = new FormData();
        data.append('name',name)
        data.append('course_id',course);
        data.append('specs',text);
        addAssignment(data);
    }
    return(
        <>
            <h1>Add Assignment</h1>
            <form className="form flex-column" onSubmit={(e)=> sendReq(e)}>
                <p>Course:</p>
                <select name="id" className="select" onChange={(e)=>setCourse(e.target.value)}>
                    {courses.data['courses'].map(item=> <option value={item._id}>{item.name} </option> )}
                </select>
                <p>Name:</p>
                <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} className="input__text" />
                <p>Info text:</p>
                <input type="text" name="text" value={text} onChange={(e)=> setText(e.target.value)} className="input__text" />
                <input type="submit" value="assign" className="btn" />
            </form>
        </>
    )
}

export default AssignmentRegister;