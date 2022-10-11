import { useState } from "react";

const CourseAssigner= ({name,select,id})=>{
    const [instructor,setInstructor] = useState('');
    const instructors = select.data.instructors;

return(
    <>
        <form className="form course flex-row" onSubmit={(e)=> e.preventDefault()}>
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