import React from 'react';
import { Link } from "react-router-dom";

export default function NavBar()  {

        const onLogout = () => {
          window.sessionStorage.setItem("loggedIn", null);
          window.sessionStorage.setItem("username", null);
          this.setState(this.state);
        }

        return (
            <div class="container min-vw-100 border-bottom border-secondary border-3 rounded">
                <nav class="navbar navbar-expand-lg navbar-light bg-body-tertiary">

                    <div class="container-fluid">
                        <div>
                            <h1>
                                The BookShelf Corner
                            </h1>
                        </div>
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                            <a class="nav-link" href="/booklist">Book List</a>
                            <a class="nav-link" href="/bookshelf">BookShelf</a>
                            <a class="nav-link" href="/tag">Book Tags</a>
                            <a class="nav-link" href="/reviews">Book Reviews</a>
                            <a class="nav-link" href="/events">Events</a>
                            {window.sessionStorage.getItem("loggedIn") === "true" ? <Link class="nav-link" to="/Create Event">Create Event</Link> : null}
                            {window.sessionStorage.getItem("loggedIn") === "true" ? <Link class="nav-link" to="/Profile">Profile</Link> : <Link class="nav-link" to="/Login">Sign in</Link>}
                            {window.sessionStorage.getItem("loggedIn") === "true" ? <Link class="nav-link" to="/" onClick={onLogout}>Sign out</Link> : null}
                        </div>
                    </div>
                </nav>
            </div>





            
          
        );
}
