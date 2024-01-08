import React from 'react';
import React, { useState } from 'react';

function BookShelf () {
  
  return (
    <div>
      <h2>Bookshelf</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
            <button onClick={() => handleRemoveBook(book.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default BookShelf;
