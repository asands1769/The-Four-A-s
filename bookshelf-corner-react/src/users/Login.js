import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
// import "./App.css";

export default function Login() {

    let navigate = useNavigate();

    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    if (window.sessionStorage.getItem('logged in')) {
      return <Navigate replace to="/profile" />
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
    
        fetch("http://localhost:8080/login", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password'),
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            if(data.fieldErrors) {
              data.fieldErrors.forEach(fieldError => {
                if(fieldError.field === 'email'){
                  setEmailError(fieldError.message);
                }
    
                if(fieldError.field === 'password'){
                  setPasswordError(fieldError.message);
                }
              });
            } else {
              sessionStorage.setItem("userId", data.userId);
              sessionStorage.setItem("loggedIn", true);
              return navigate("/profile");
            }
          })
          .catch((err) => err);
      }

      const onEmailFocus = (e) => {
        e.preventDefault();
        setEmailError('');
      }
    
      const onPasswordFocus = (e) => {
        e.preventDefault();
        setPasswordError('');
      }

      return (
        <div>
            <span>
                Sign in to your account
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
                  <div>
                    <label htmlFor="password">Password</label>
                        {/* <div className="reset-pass">
                          <a href="/">Forgot your password?</a>
                        </div> */}
                  </div>
                  <input type="password" name="password" onFocus={onPasswordFocus}/>
                    {
                      passwordError ? <span style={{ color: 'red', fontSize: '12px'}}>{passwordError}</span> : ''
                    }
                </div>
                  <div>
                    <input type="submit" name="submit" value="Sign in" />
                  </div>
            </form>
            <p>
              Not a member of the BookShelf Corner? Sign up <a href="/users/register">here!</a>
            </p>
        </div>
      )

}