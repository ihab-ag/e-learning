import { useEffect } from "react";


const CourseAssigner= ({name,select})=>{
    console.log(select)
return(
    <>
        <form className="form course flex-row" onSubmit={(e)=> e.preventDefault()}>
            <p>{name}</p>
            <div className="flex-row course__div">
                <select name="id" className="select">
                    <option value="test">test1</option>
                    <option value="test">test2</option>
                </select>
                <input type="submit" value="assign" className="btn" />
            </div>
        </form>
    </>
)
}

export default CourseAssigner;