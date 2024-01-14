

import React, { useState } from 'react';

const WishListComponent = () => {
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [publishedYear, setPublishedYear] = useState('');
    const [genre, setGenre] = useState('');

    const handleAddToWishlist = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior

        const formData = new FormData(event.target);

        fetch('http://localhost:8080/api/books', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                bookTitle: formData.get('bookTitle'), 
                bookAuthor: formData.get('bookAuthor'), 
                publishedYear: formData.get('publishedYear'), 
                genre: formData.get('genre') 
            }),
        })
            .then(response => response.json())
            .then(data => console.log('Book added to wishlist:', data))
            .catch(error => console.error('Error adding book to wishlist:', error));
    };

    return (
        <div>
            <h2>Community Wishlist</h2>
            <form onSubmit={handleAddToWishlist}>
                <div>
                    <label>Book Title: </label>
                    <input type="text" value={bookTitle} onChange={event => setBookTitle(event.target.value)} />
                </div>

                <div>
                    <label>Book Author: </label>
                    <input type="text" value={bookAuthor} onChange={event => setBookAuthor(event.target.value)} />
                </div>

                <div>
                    <label>Published Year: </label>
                    <input type="text" value={publishedYear} onChange={event => setPublishedYear(event.target.value)} />
                </div>

                <div>
                    <label>Genre: </label>
                    <input type="text" value={genre} onChange={event => setGenre(event.target.value)} />
                </div>

                 <div>
                    <input type="submit" name="submit" value="Add to Wishlist" />
                  </div>

            
            </form>
        </div>
    )
};

export default WishListComponent;
