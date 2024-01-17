import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams} from 'react-router-dom';




function EditTag () {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="type" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">MustRead</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Timeless</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Author</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
  export default EditTag;