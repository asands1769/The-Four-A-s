
import React, { useState } from 'react';

const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = () => {
        // Implement logic to send a new book to the backend API
        const newBook = { title, author, genre };

        fetch('/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newBook),
        })
            .then(response => {
                // Handle success (maybe update the book list)
            })
            .catch(error => console.error('Error adding book:', error));
    };

    return (
        <div>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
                <label>Title: <input type="text" value={title} onChange={e => setTitle(e.target.value)} /></label><br />
                <label>Author: <input type="text" value={author} onChange={e => setAuthor(e.target.value)} /></label><br />
                <label>Genre: <input type="text" value={genre} onChange={e => setGenre(e.target.value)} /></label><br />
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default BookForm;
