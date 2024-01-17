import React from 'react';
import { Link } from "react-router-dom";

export default function Header()  {

        const onLogout = () => {
          window.sessionStorage.setItem("loggedIn", null);
          window.sessionStorage.setItem("username", null);
          this.setState(this.state);
        }

        return (
            <header>
                
                <h3>The BookShelf Corner</h3>
                
                        <ul>
                            <a href="/">Home</a>
                            <a href="/bookshelf">BookShelf</a>
                            <a href="/booklist">BookList</a>
                            <a href="/events">Events</a>
                            {window.sessionStorage.getItem("loggedIn") === "true" ? <Link to="/Profile">Profile</Link> : <Link to="/Login">Sign in</Link>}
                            {window.sessionStorage.getItem("loggedIn") === "true" ? <Link to="/" onClick={onLogout}>Sign out</Link> : null}
                        </ul>
                        {/* <style>
        {`
          body {
            background-color: cornflowerblue;
          }
          h1 {
            color: green;
          }
          p {
            font-size: 18px;
          }
        `}
      </style> */}
      <style>
        {`
          header {
            background-color: #333;
            color: #fff;
            padding: 15px;
            text-align: center;
          }

          h3 {
            margin: 0;
          }

          .navigation-list {
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: center;
          }

          .navigation-list li {
            margin: 0 10px;
          }

          .navigation-list li a {
            color: #fff;
            text-decoration: none;
          }

          .navigation-list li a:hover {
            text-decoration: underline;
          }
        `}
      </style>
            </header>
        );
}