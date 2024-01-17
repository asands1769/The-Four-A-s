
import React, { useState, useEffect } from 'react';

const ViewBookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Function to fetch book data from the API
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/books');
        const data = await response.json();
        setBooks(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };

    // Call the fetchBooks function when the component mounts
    fetchBooks();
    //console.log(books);
  }, []); // Empty dependency array ensures the effect runs only once on mount
 
  return (
    <div>
      <h3 className='text-primary'>Books Available to Borrow</h3>
      <div className='bookshelf'>
        {books.map((book) => (
          <div key={book.bookId} className='book'>
            <ol>
              <li>
            <span className="label">Book Title: {book.bookTitle}<br />
                                    Book Author: {book.bookAuthor} <br />
                                    Published Year: {book.publishedYear}<br />
                                    Genre: {book.genre} </span>
            <div className='text-success'>
              {book.available ? 'Available to borrow' : 'Not Available'}
            </div>
            </li>
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewBookList;


