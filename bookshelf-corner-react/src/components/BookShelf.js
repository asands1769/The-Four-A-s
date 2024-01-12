import React, { useState, useEffect } from 'react';

const BookShelf = () => {
  const [bookshelves, setBookshelves] = useState([]);
  const [newBookShelf, setNewBookShelf] = useState({
    name: '',
    bookCategory: '',
    tagType: '',
  });

  useEffect(() => {
    fetchBookshelves();
  }, []);

  const fetchBookshelves = async () => {
    try {
      const response = await fetch('http://localhost:8080/bookshelves');
      const data = await response.json();
      setBookshelves(data);
    } catch (error) {
      console.error('Error fetching bookshelves:', error);
    }
  };

  const addBookShelf = async () => {
    try {
      const response = await fetch('http://localhost:8080/bookshelves/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBookShelf),
      });

      if (response.ok) {
        fetchBookshelves();
        setNewBookShelf({
          name: '',
          bookCategory: '',
          tagType: '',
        });
      } else {
        console.error('Error adding bookshelf:', response.status);
      }
    } catch (error) {
      console.error('Error adding bookshelf:', error);
    }
  };

  const deleteBookShelf = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/bookshelves/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchBookshelves();
      } else {
        console.error('Error deleting bookshelf:', response.status);
      }
    } catch (error) {
      console.error('Error deleting bookshelf:', error);
    }
  };

  return (
    <div>
      <h2>BookShelf</h2>

      <div>
        <h3>Add New Bookshelf</h3>
        <label>Name:</label>
        <input
          type="text"
          value={newBookShelf.name}
          onChange={(e) => setNewBookShelf({ ...newBookShelf, name: e.target.value })}
        />
        <label>Book Category:</label>
        <input
          type="text"
          value={newBookShelf.bookCategory}
          onChange={(e) => setNewBookShelf({ ...newBookShelf, bookCategory: e.target.value })}
        />
        <label>Tag Type:</label>
        <input
          type="text"
          value={newBookShelf.tagType}
          onChange={(e) => setNewBookShelf({ ...newBookShelf, tagType: e.target.value })}
        />
        <button onClick={addBookShelf}>Add Bookshelf</button>
      </div>

      <div>
        <h3>Delete Bookshelves</h3>
        <ul>
          {bookshelves.map((bookshelf) => (
            <li key={bookshelf.id}>
              {bookshelf.name} - {bookshelf.bookCategory} - {bookshelf.tagType}
              <button onClick={() => deleteBookShelf(bookshelf.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookShelf;
