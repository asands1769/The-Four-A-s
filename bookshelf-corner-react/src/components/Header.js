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
                            <a href="/booklist">Book List</a>
                            <a href="/events">Events</a>
                            {window.sessionStorage.getItem("loggedIn") === "true" ? <Link to="/Profile">Profile</Link> : <Link to="/Login">Sign in</Link>}
                            {window.sessionStorage.getItem("loggedIn") === "true" ? <Link to="/" onClick={onLogout}>Sign out</Link> : null}
                        </ul>
            </header>
        );
}