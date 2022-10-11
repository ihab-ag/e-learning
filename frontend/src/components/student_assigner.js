import { useState } from "react";

const StudentAssigner=({name, select, id})=>{
    const [student,setStudent] = useState('');
    const students = select.data.students;
return(
    <>
        <form className="form course flex-row" onSubmit={(e)=> e.preventDefault()}>
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