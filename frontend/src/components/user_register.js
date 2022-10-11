import { useState } from "react";
import { refresh } from "../hooks/refresh";
import { register } from "../hooks/register";

const UserRegister=() =>{
    const [type,setType]= useState('instructor');
    const [name,setname]= useState('');
    const [email,setemail]= useState('');
    const [pass,setpass]= useState('');
    const [message,setMessage]= useState('');

    const validate = async(e) => {
        e.preventDefault();
        if(type !== 'student'&&type !== 'instructor')
            setMessage('Name cannot be empty');
        else if(name === '')
            setMessage('Name cannot be empty');
        else if((!(/\w{3,}[@]\w{2,}[.][a-zA-Z]*$/).test(email)))
            setMessage('invalid email');
        else if(pass.length < 6)
            setMessage('password too short')
        else{
            const data = new FormData();
            data.append("type",type);
            data.append("name",name);
            data.append("email",email);
            data.append("password",pass);
            const res = await register(data);
            if(res && res.data.status==200){
                setMessage('success');
                await refresh();
            }
            setMessage('email already taken');
        }
    }
    return(
        <>
            <form className="form flex-column" onSubmit={validate}>
                <h1>Register User</h1>
                <p>Type:</p>
                <div className="flex-row">
                    <input type='radio' name='type' value='instructor' onChange={(e) => setType(e.target.value)} id='instructor' checked={type==='instructor' } />
                    <label for='instructor'>Instructor</label>
                    <input type='radio' name='type' value='student' onChange={(e) => setType(e.target.value)} id='student' checked={type==='student'} />
                    <label for='student'>Student</label>
                </div>
                <p>Name:</p>
                <input type="text" name='name' className="input__text" value={name} onChange={(e) => setname(e.target.value)} />
                <p>Email:</p>
                <input type="text" name='email' className="input__text" value={email} onChange={(e) => setemail(e.target.value)} />
                <p>Password:</p>
                <input type="password" name='pass' className="input__text" value={pass} onChange={(e) => setpass(e.target.value)} />
                <input type="submit" value='submit' className="btn" />
            </form>
            <p className="message">{message}</p>
        </>
    );
}

export default UserRegister;