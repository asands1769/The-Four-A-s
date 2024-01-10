import React from 'react';
import { Component } from 'react';
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Header()  {

        const onLogout = () => {
        //   console.log(sessionStorage.getItem("loggedIn"));
          window.sessionStorage.setItem("loggedIn", null);
        //   console.log(sessionStorage.getItem("loggedIn"));
        }



        return (
            <header>
                <h1>The BookShelf Corner</h1>
                        <ul>
                            <a href="/">Home</a>
                            <a href="/booklist">Book List</a>
                            <a href="/events">Events</a>
                            <a href="/login">Sign in</a>
                            <Link to="/" onClick={onLogout}>Sign out</Link>
                        </ul>
            </header>
        );
}