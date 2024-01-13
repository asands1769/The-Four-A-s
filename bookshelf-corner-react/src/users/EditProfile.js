import React, { useState, useEffect } from 'react'

export default function EditProfile() {

    const userId = window.sessionStorage.getItem("userId");
    const [username, setUsername] = useState("");
    const [genres, setGenres] = useState([]);
    const [genreId, setGenreId] = useState(0);
    const [newGenre, setNewGenre] = useState('');


    const handleSubmitGenre = (e) => {
        fetch("http://localhost:8080/addGenre/"+userId, {
            method: "POST",
            headers: {
                "content-type": "text/plain"
            },
            body: newGenre.toString()
        })
        setNewGenre('');
        e.preventDefault();
    };

    const handleInputChangeGenre = (e) => {
        setNewGenre(e.target.value);
    }

    useEffect(() => {

        const fetchUsername = async () => {
            await fetch("http://localhost:8080/getUsername/"+userId, {
            method: "GET",
            headers: {
                "content-type": "text/plain"
            },
            })
            .then((response) => response.text())
            .then((data) => {
                setUsername(data);
                window.sessionStorage.setItem("username",data)
            })
            .catch((error) => error);
        };

        const fetchGenres = async () => {
            await fetch("http://localhost:8080/getGenres/"+userId, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            },
            })
            .then((response) => response.json())
            .then((data) => {
                    setGenres(data);
            })
            .catch((error) => error);
        };

        fetchUsername();
        fetchGenres();
    },);
    
    return (
        <div>
            <div>
                <h3>Hi, {username}, you can edit your profile on this page!</h3>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Default User"></img>
            </div>
            <div>
                <h5>Favorite Genres:</h5>
                <ul> 
                    {
                        genres.map(
                            genre =>
                            <div>
                            <li key={genre.id}>{genre.genreName}</li><button onClick={() => fetch("http://localhost:8080/deleteGenre/"+genre.id, {method: "DELETE"})}>Remove</button>
                            </div>
                        )
                    }
                </ul>
                <form onSubmit={handleSubmitGenre}>
                    <input type="text" value={newGenre} onChange={handleInputChangeGenre}/><input type="submit" value="Add Genre" />
                </form>
            </div>
            <div>
                <h5>Favorite Books</h5>
                {/* <ul> 
                    {
                        genres.map(
                            genre =>
                            <li>{genre.genreName}</li>
                        )
                    }
                </ul> */}
          </div>
        </div>
    );
}
