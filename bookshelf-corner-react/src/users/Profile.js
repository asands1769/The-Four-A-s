import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Profile() {

    // make logout button with sessionStorage and auto nav away
    let navigate = useNavigate();

    // const username = sessionStorage.getItem("username");
    getUserInfo = () => {

        fetch("http://localhost:8080/addBook", {
        method: "GET",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        title: formData.get('title'),
        author: formData.get('author'),
        }),
    })
        .then((response) => response.json())
        .then((data) => {
    

        })
        .catch((err) => err);
    }
   
    if (!window.sessionStorage.getItem('logged in')) {
        return <Navigate replace to="/users/login" />
      }

    const onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    fetch("http://localhost:8080/addBook", {
        method: "POST",
        headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
        title: formData.get('title'),
        author: formData.get('author'),
        }),
    })
        .then((response) => response.json())
        .then((data) => {
        // if(data.fieldErrors) {
        //     data.fieldErrors.forEach(fieldError => {
        //     if(fieldError.field === 'email'){
        //         setEmailError(fieldError.message);
        //     }
        //     if(fieldError.field === 'username'){
        //         setUsernameError(fieldError.message);
        //         }
        //     if(fieldError.field === 'password'){
        //         setPasswordError(fieldError.message);
        //     }
        //     });
        // } else {
            
            alert("You have succesfully added a book to share.");
            return navigate(0);
        // }
        })
        .catch((err) => err);
    }
    // }

    return (
        <div>
            <h3>Hi, {username} welcome to your Profile</h3>
              <span>
                  <h5>Add a new book to share</h5>
              </span>
              <form method="POST" autoComplete="off" onSubmit={onSubmit}>
                  <div>
                  <label htmlFor="title">Book Title</label>
                  <input type="text" name="title" />
                  </div>
                  <div>
                  <label htmlFor="author">Author</label>
                  <input type="text" name="author" />
                  </div>
                  {/* <div>
                      <label htmlFor="yearPublsihed">Year Published</label> 
                      <input type="number" name="yearPublished" />
                  </div> */}
                  <div>
                      <input type="submit" name="submit" value="Add Book"/>
                  </div>
              </form>
          </div>
    );
}
