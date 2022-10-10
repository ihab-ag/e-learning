import { useState } from "react"

const AssignmentRegister =()=>{
    const [name,setName]= useState('');
    const [text,setText]= useState('');
    return(
        <>
            <h1>Add Assignment</h1>
            <form className="form flex-column" onSubmit={(e)=> e.preventDefault()}>
                <p>Course:</p>
                <select name="id" className="select">
                    <option value="test">test1</option>
                    <option value="test">test2</option>
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