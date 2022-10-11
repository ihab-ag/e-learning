import { useState } from "react";
import { assignStudent } from "../hooks/assign_student";

const StudentAssigner=({name, select, id})=>{
    const [student,setStudent] = useState('');
    const students = select.data.students;

    const sendReq=(e)=>{
        e.preventDefault()
        const data = new FormData();
        data.append('student_id',student)
        data.append('course_id',id);
        assignStudent(data);
    }
return(
    <>
        <form className="form course flex-row" onSubmit={(e)=> sendReq(e)}>
            <p>{name}</p>
            <div className="flex-row course__div">
                <select name="id" className="select" onChange={(e)=>setStudent(e.target.value)}>
                {students.map(item=> <option value={item._id}>{item.name}</option>)}
                </select>
                <input type="submit" value="assign" className="btn" />
            </div>
        </form>
    </>
)
}

export default StudentAssigner;