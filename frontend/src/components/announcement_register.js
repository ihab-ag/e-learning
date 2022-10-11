import { useState } from "react"
import AssignmentRegister from "./assignment_register";

const AnnouncementRegister =()=>{
    const [name,setName]= useState('');
    const [text,setText]= useState('');
    const sendReq=(e)=>{
        e.preventDefault()
        const data = new FormData();
        data.append('name',name)
        data.append('text',text);
        AssignmentRegister(data);
    }
    return(
        <>
            <h1>Add Announcement</h1>
            <form className="form flex-column" onSubmit={(e)=> sendReq(e)}>
                <p>Name:</p>
                <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value)} className="input__text" />
                <p>Info text:</p>
                <input type="text" name="text" value={text} onChange={(e)=> setText(e.target.value)} className="input__text" />
                <input type="submit" value="announce" className="btn" />
            </form>
        </>
    )
}

export default AnnouncementRegister;