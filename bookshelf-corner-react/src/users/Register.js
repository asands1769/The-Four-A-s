import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function RegisterUser() {

    let navigate = useNavigate();

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [verifyPasswordError, setVerifyPasswordError] = useState('');
    
    const onSubmit = (e) => {
        e.preventDefault();
   
        const formData = new FormData(e.target);

        if(formData.get('password') !== formData.get('verifyPassword')) {
          setVerifyPasswordError('Passwords do not match.');
          e.preventDefault();
        } else {

        fetch("http://localhost:8080/register", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.get('email'),
            username: formData.get('username'),
            password: formData.get('password')
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if(data.fieldErrors) {
              data.fieldErrors.forEach(fieldError => {
                if(fieldError.field === 'email'){
                  setEmailError(fieldError.message);
                }
                if(fieldError.field === 'username'){
                    setUsernameError(fieldError.message);
                  }
                if(fieldError.field === 'password'){
                  setPasswordError(fieldError.message);
                }
              });
            } else {
              alert("You have succesfully registered.");
            }
          })
          .catch((err) => err);
       }
       return navigate("/users/profile");
      }
    

      const onEmailFocus = (e) => {
        e.preventDefault();
        setEmailError('');
      }

      const onUsernameFocus = (e) => {
        e.preventDefault();
        setUsernameError('');
      }
    
      const onPasswordFocus = (e) => {
        e.preventDefault();
        setPasswordError('');
      }

      const onVerifyPasswordFocus = (e) => {
        e.preventDefault();
        setVerifyPasswordError('');
      }
    
      return (
          <div>
              <span>
                  <h3>Register New User</h3>
              </span>
              <form method="POST" autoComplete="off" onSubmit={onSubmit}>
                  <div>
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" onFocus={onEmailFocus}/>
                  {
                      emailError ? <span style={{ color: 'red', fontSize: '12px'}}>{emailError}</span> : ''
                  }
                  </div>
                  <div>
                  <label htmlFor="username">Username</label>
                  <input type="text" name="username" onFocus={onUsernameFocus}/>
                  {
                      usernameError ? <span style={{ color: 'red', fontSize: '12px'}}>{usernameError}</span> : ''
                  }
                  </div>
                  <div>
                      <label htmlFor="password">Password</label> 
                      <input type="password" name="password" onFocus={onPasswordFocus}/>
                          {
                          passwordError ? <span style={{ color: 'red', fontSize: '12px'}}>{passwordError}</span> : ''
                          }
                  </div>
                  <div>
                      <label htmlFor="verifyPassword">Verify Password</label> 
                      <input type="password" name="verifyPassword" onFocus={onVerifyPasswordFocus}/>
                          {
                          verifyPasswordError ? <span style={{ color: 'red', fontSize: '12px'}}>{verifyPasswordError}</span> : ''
                          }
                  </div>
                  <div>
                      <input type="submit" name="submit" value="Sign up"/>
                  </div>
              </form>
          </div>
      );
        // <div>
        //     <h3>Register</h3>
        //     <form onSubmit={(e)=>onSubmit(e)}>
        //         <div>
        //             <label htmlFor="email">
        //                 E-mail
        //             </label>
        //             <input type="text" placeholder="Enter your email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        //         </div>
        //         <div>
        //             <label htmlFor="username">
        //                 Username
        //             </label>
        //             <input type="text" placeholder="Enter your username" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        //         </div>
        //         <div>
        //             <label htmlFor="password">
        //                 Password
        //             </label>
        //             <input type="password" placeholder="Enter your password" name="pwHash" value={pwHash} onChange={(e)=>setPwHash(e.target.value)}/>
        //         </div>
        //         <div>
        //             <label htmlFor="verifyPassword">
        //                 Verify Password
        //             </label>
        //             <input type="password" placeholder="Re-enter your password" name="pwHash" value={pwHash} onChange={(e)=>setPwHash(e.target.value)}/>
        //         </div>
        //     <button type="submit">Submit</button>
        //     </form>
        // </div>
    
}
