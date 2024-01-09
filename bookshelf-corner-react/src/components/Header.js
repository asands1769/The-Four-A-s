import { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>The BookShelf Corner</h1>
                        <ul>
                            <a href="/">Home</a>
                            <a href="/booklist">Book List</a>
                            <a href="/events">Events</a>
                            <a href="/login">Sign in</a>
                            {/* <button value="Log out">Log out</button> */}
                        </ul>
            </header>
        );
    }
}