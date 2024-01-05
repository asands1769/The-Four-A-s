import React, { useState } from 'react';

export default function RegisterUser() {

    // const [user, setUser] = useState({
    //     email:""
    // })

    // const {email} = user;

    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    const [pwHash,setPwHash] = useState('');

    // const onInputChange = (e) => {
    //     setUser({...user,[e.target.email]:e.target.value})
    // };

    // const onInputChange = (e) => {
    //     setUser({[e.target.email]:e.target.value})
    // };

    const onSubmit = (e) => {
        e.preventDefault();
        const user = {email, username, pwHash};
        fetch("http://localhost:8080/register",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
        }).then(()=>{
            console.log("New user added")
        })
    };
    
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
        return (
            <div>
                <h3>Register</h3>
                <form onSubmit={(e)=>onSubmit(e)}>
                    <div>
                        <label htmlFor="email">
                            E-mail
                        </label>
                        <input type="text" placeholder="Enter your email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="username">
                            Username
                        </label>
                        <input type="text" placeholder="Enter your username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" placeholder="Enter your password" name="pwHash" value={pwHash} onChange={(e)=>setPwHash(e.target.value)}/>
                    </div>
                <button type="submit">Submit</button>
                </form>
            </div>
        );
}
