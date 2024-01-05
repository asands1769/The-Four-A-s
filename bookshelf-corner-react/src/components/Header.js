import { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1>The BookShelf Corner</h1>
                <form>
                    <input type='text' value='email'/>
                    <input type='text' value='password'/>
                    <button type='submit'>submit</button>
                </form>
            </header>
        );
    }
}