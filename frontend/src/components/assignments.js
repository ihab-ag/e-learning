import { useState } from "react"

const Assignment =()=>{
    const [text,setText]= useState('');
    return(
        <>
            <h1>Assignment</h1>
            <form className="form flex-column" onSubmit={(e)=> e.preventDefault()}>
                <p>Course</p>
                <p>Name</p>
                <p>Answer:</p>
                <input type="text" name="text" value={text} onChange={(e)=> setText(e.target.value)} className="input__text" />
                <input type="submit" value="submit" className="btn" />
            </form>
        </>
    )
}

export default Assignment;