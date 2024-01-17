import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Tag = () => {
  const [tags, setTags] = useState([]);
  const [newTagName, setNewTagName] = useState('');
  const [newTagType, setNewTagType] = useState('');

  // Function to fetch all tags
  const fetchTags = async () => {
    try {
      const response = await fetch("http://localhost:8080/tags");
      const data = await response.json();
      setTags(data);
    } catch (error) {
      console.error('Error fetching tags:', error);
    }
  };

  // Function to create a new tag
  const createTag = async () => {
    try {
      const response = await fetch("http://localhost:8080/tags", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://localhost:3000',
        },
        body: JSON.stringify({ name: newTagName, type: newTagType }),
      });

      if (response.status === 201) {
        // Tag created successfully
        setNewTagName('');
        setNewTagType('');
        fetchTags(); // Refresh the tag list
      } else {
        console.error('Error creating tag:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating tag:', error);
    }
  };

  useEffect(() => {
    fetchTags();
  }, []); // Fetch tags on component mount

  return (
    <div>
      <h2>Tag</h2>
      <ul>
        {tags.map((tag) => (
          <li key={tag.id}>
            {tag.name} - {tag.type}
          </li>
        ))}
      </ul>

      <h2>Create New Tag</h2>
      <div>
        <label>Name:</label>
        <input type="text" value={newTagName} onChange={(e) => setNewTagName(e.target.value)} />
      </div>
      <div>
        <label>Type:</label>
        <input type="text" value={newTagType} onChange={(e) => setNewTagType(e.target.value)} />
      </div>
      <button onClick={createTag}>Create Tag</button>
    </div>
  );
};

export default Tag;
