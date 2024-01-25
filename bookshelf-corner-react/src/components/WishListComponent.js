
import React, { useState, useEffect } from 'react';

const WishlistComponent = () => {
    const [books, setBooks] = useState([]);
    const [bookTitle, setBookTitle] = useState('');
    const [bookAuthor, setBookAuthor] = useState('');
    const [publishedYear, setPublishedYear] = useState('');
    const [genre, setGenre] = useState('');

    useEffect(() => {
        // Fetch the wishlist books from the API when the component mounts
        fetch('http://localhost:8080/api/books')
            .then(response => response.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching wishlist:', error));
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    const handleAddToWishlist = (event) => {
        event.preventDefault();

        fetch('http://localhost:8080/api/books', {
            method: 'POST',
            headers: {
                Accept: "application/json",
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                bookTitle, 
                bookAuthor, 
                publishedYear, 
                genre 
            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Book added to wishlist:', data);
                // Update the local state to include the newly added book
                setBooks([...books, data]);
                // Clear input fields
                setBookTitle('');
                setBookAuthor('');
                setPublishedYear('');
                setGenre('');
            })
            .catch(error => console.error('Error adding book to wishlist:', error));
    };
     const handleRemoveFromWishlist = (bookId) => {
        // Send a DELETE request to remove the book from the wishlist
        fetch(`http://localhost:8080/api/books/${bookId}`, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(data => {
                console.log('Book removed from wishlist:', data);
                // Update the local state to exclude the removed book
                setBooks(books.filter(book => book.bookId !== bookId));
            })
            .catch(error => console.error('Error removing book from wishlist:', error));
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

            <div>
                <ul>
                    {books.map(book => (
                        <li key={book.bookId}>
                            {`${book.bookTitle} by ${book.bookAuthor}, ${book.publishedYear}, Genre: ${book.genre}`}
                            <button onClick={() => handleRemoveFromWishlist(book.bookId)}>Remove </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WishlistComponent;

