import React, { useState, useEffect } from 'react';

const BookShelf = () => {
  const [bookShelves, setBookShelves] = useState([]);
  const [newShelfName, setNewShelfName] = useState('');

  // Function to fetch bookshelves from the backend
  const fetchBookShelves = async () => {
    try {
      const response = await fetch('/api/bookshelves');
      const data = await response.json();
      setBookShelves(data);
    } catch (error) {
      console.error('Error fetching bookshelves:', error);
    }
  };

  // Function to add a new bookshelf
  const handleAddShelf = async () => {
    try {
      const response = await fetch('/api/bookshelves/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newShelfName }),
      });

      if (response.status === 201) {
        // Bookshelf added successfully
        setNewShelfName('');
        fetchBookShelves(); // Refresh the bookshelf list
      } else {
        console.error('Error adding bookshelf:', response.statusText);
      }
    } catch (error) {
      console.error('Error adding bookshelf:', error);
    }
  };

  useEffect(() => {
    fetchBookShelves();
  }, []); // Fetch bookshelves on component mount

  return (
    <div>
      <h2>Bookshelves</h2>
      {bookShelves.map((shelf) => (
        <div key={shelf.id}>
          <h3>{shelf.name}</h3>
          <ul>
            {shelf.books.map((book) => (
              <li key={book.id}>
                {book.title} by {book.author}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <h3>Add New Shelf</h3>
        <label>Name:</label>
        <input type="text" value={newShelfName} onChange={(e) => setNewShelfName(e.target.value)} />
        <button onClick={handleAddShelf}>Add Shelf</button>
      </div>
    </div>
  );
};

export default BookShelf;
