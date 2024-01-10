import React, { useState, useEffect } from 'react';



let BookShelf = () => {
  let [bookShelves, setBookShelves] = useState([]);
  let [newBookShelf, setNewBookShelf] = useState({ name: '', books: [] });

  useEffect(() => {
    // Fetch bookshelves from the backend when the component mounts
    fetch('"http://localhost:8080/bookshelves"')
      .then(response => response.json())
      .then(data => setBookShelves(data))
      .catch(error => console.error('Error fetching bookshelves:', error));
  }, []);

  let handleInputChange = (event) => {
    let { name, value } = event.target;
    setNewBookShelf({ ...newBookShelf, [name]: value });
  };

  let handleCreateBookShelf = () => {
    // Send a POST request to create a new bookshelf
    fetch('"http://localhost:8080/bookshelves', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      },
      body: JSON.stringify(newBookShelf),
    })
      .then(response => response.json())
      .then(data => setBookShelves([...bookShelves, data]))
      .catch(error => console.error('Error creating bookshelf:', error));

    // Clear the input fields after creating a new bookshelf
    setNewBookShelf({ name: '', books: [] });
  };

  return (
    <div>
      <h1>BookShelves</h1>
      <ul>
        {bookShelves.map(bookShelf => (
          <li key={bookShelf.id}>
            {bookShelf.name} - Books: {bookShelf.books.length}
          </li>
        ))}
      </ul>
      <div>
        <h2>Create a New BookShelf</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newBookShelf.name}
            onChange={handleInputChange}
          />
        </label>
        <button onClick={handleCreateBookShelf}>Create BookShelf</button>
      </div>
    </div>
  );
};

export default BookShelf;
