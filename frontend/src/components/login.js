import { useState } from "react";

const Login=() =>{
    const [email,setemail]= useState('');
    const [pass,setpass]= useState('');
    const [message,setMessage]= useState('');

    return(
        <>
            <form className="form login" >
                <h1>E-Learning</h1>
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

export default Login;