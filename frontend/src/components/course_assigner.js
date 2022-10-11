import { useState } from "react";
import { assignInstructor } from "../hooks/assign_instructor";

const CourseAssigner= ({name,select,id})=>{
    const [instructor,setInstructor] = useState('');
    const instructors = select.data.instructors;
    const sendReq=(e)=>{
        e.preventDefault()
        const data = new FormData();
        data.append('instructor',instructor)
        data.append('id',id);
        assignInstructor(data);
    }

return(
    <>
        <form className="form course flex-row" onSubmit={(e)=> sendReq(e) }>
            <p>{name}</p>
            <div className="flex-row course__div">
                <select name="id" className="select" onChange={(e)=>setInstructor(e.target.value)}>
                {instructors.map(item=> <option value={item._id}>{item.name}</option>)}
                </select>
                <input type="submit" value="assign" className="btn" />
            </div>
        </form>
    </>
)
}

export default CourseAssigner;