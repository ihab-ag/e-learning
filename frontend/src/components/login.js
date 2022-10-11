import { useState } from "react";
import { login } from "../hooks/login";

const Login=() =>{
    const [email,setemail]= useState('');
    const [pass,setpass]= useState('');
    const [message,setMessage]= useState('');

    const data= new FormData();
    data.append('email',email);
    data.append('password',pass);
    const go= async (e)=>{
        e.preventDefault();
        const res= await login(data);
        if(res && res.data.status==200){
            window.location.replace(`http://localhost:3000/${res.data.user.type}`);
        }
        setMessage('Incorrect Credentials');
    }
    return(
        <>
            <form className="form login" method="post" onSubmit={go}>
                <h1>E-Learning</h1>
                <p>Email:</p>
                <input type="text" name='email' className="input__text" value={email} onChange={(e) => setemail(e.target.value)} />
                <p>Password:</p>
                <input type="password" name='password' className="input__text" value={pass} onChange={(e) => setpass(e.target.value)} />
                <input type="submit" value='submit' className="btn" />
            </form>
            <p className="message">{message}</p>
        </>
    );
}

export default Login;