import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function Profile() {

    let navigate = useNavigate();

    const userId = window.sessionStorage.getItem("userId");
    const [passwordError, setPasswordError] = useState('');
    const [verifyPasswordError, setVerifyPasswordError] = useState('');

        const onSubmit = (e) => {
            e.preventDefault();
       
            const formData = new FormData(e.target);
    
            if(formData.get('password') !== formData.get('verifyPassword')) {
              setVerifyPasswordError('Passwords do not match.');
              e.preventDefault();
            } else {
    
            fetch("http://localhost:8080/changePassword", {
              method: "PUT",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                password: formData.get('password'),
                userId: userId 
              }),
            })
              .then((response) => response.json())
              .then((data) => {
                  if (data.fieldErrors) {
                    data.fieldErrors.forEach(fieldError => {
                      if(fieldError.field === 'password'){
                        setPasswordError(fieldError.message);
                      }
                    });
                } else {
                  alert("You have succesfully changed your password.");
                  navigate("/editprofile");
                  return navigate(0);
                }
              })
              .catch((err) => err);
           }
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
                  <h3>Change your password below:</h3>
              </span>
              <form method="PUT" autoComplete="off" onSubmit={onSubmit}>
                  <div>
                      <label htmlFor="password">Password</label> 
                      <input type="password" name="password" onFocus={onPasswordFocus} />
                          {
                          passwordError ? <span style={{ color: 'red', fontSize: '12px'}}>{passwordError}</span> : ''
                          }
                  </div>
                  <div>
                      <label htmlFor="verifyPassword">Verify Password</label> 
                      <input type="password" name="verifyPassword" onFocus={onVerifyPasswordFocus} />
                          {
                          verifyPasswordError ? <span style={{ color: 'red', fontSize: '12px'}}>{verifyPasswordError}</span> : ''
                          }
                  </div>
                  <div>
                      <input type="submit" name="submit" value="Submit"/>
                  </div>
              </form>
        
        </div>
    );
}
