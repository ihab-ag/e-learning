import { useState } from "react"

const AnnouncementRegister =()=>{
    const [name,setName]= useState('');
    const [text,setText]= useState('');
    return(
        <>
            <h1>Add Announcement</h1>
            <form className="form flex-column" onSubmit={(e)=> e.preventDefault()}>
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