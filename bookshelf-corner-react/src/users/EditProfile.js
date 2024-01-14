import React, { useState, useEffect } from 'react'

export default function EditProfile() {

    const userId = window.sessionStorage.getItem("userId");
    const [username, setUsername] = useState("");
    const [genres, setGenres] = useState([]);
    const [newGenre, setNewGenre] = useState('');
    const [favoriteBooks, setFavoriteBooks] = useState([]);
    const [aboutMe, setAboutMe] = useState('');
    const [newFavoriteBook, setNewFavoriteBook] = useState('');
    const [newUsername, setNewUsername] = useState('');


    // const onClickEditMode = (genre) => {
    //     setEditGenre(genre.genreName);
    //     genres.map(g => {
    //         // if (g.id === genre.id) {
    //         //     g["editMode"] = true;
    //         // }
    //         // return g
    //     });
    //     // genreName.preventDefault();
    //     console.log(genre);
    // };

    // const handleInputChangeGenreEdit = (e) => {
    //     setEditGenre(e.target.value);
    // }

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

    const handleSubmitFavoriteBook = (e) => {
        fetch("http://localhost:8080/addFavoriteBook/"+userId, {
            method: "POST",
            headers: {
                "content-type": "text/plain"
            },
            body: newFavoriteBook.toString()
        })
        setNewFavoriteBook('');
        e.preventDefault();
    };

    const handleSubmitUsername = (e) => {
        fetch("http://localhost:8080/updateUsername/"+userId, {
            method: "PUT",
            headers: {
                "content-type": "text/plain"
            },
            body: newUsername.toString()
        })
        setNewUsername('');
        e.preventDefault();
    };

    // const handleSubmitGenreEdit = (genre) => {
    //     fetch("http://localhost:8080/updateGenre/"+genre.id, {
    //         method: "PUT",
    //         headers: {
    //             "content-type": "text/plain"
    //         },
    //         body: editGenre.toString()
    //     })
    //     setEditGenre('');
        // genres.map(g => {
        //     if (g.id === genre.id) {
        //         g["editMode"] = false;
        //     }
        //     return g
        // });
    // };

    const handleInputChangeUsername = (e) => {
        setNewUsername(e.target.value);
    }

    const handleInputChangeGenreSubmission = (e) => {
        setNewGenre(e.target.value);
    }

    const handleInputChangeFavoriteBookSubmission = (e) => {
        setNewFavoriteBook(e.target.value);
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
                    // genres.forEach((object) => {
                    //     object["editMode"] = false;
                    // })
            })
            .catch((error) => error);
        };

        const fetchFavoriteBooks = async () => {
            await fetch("http://localhost:8080/getFavoriteBooks/"+userId, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            },
            })
            .then((response) => response.json())
            .then((data) => {
                    setFavoriteBooks(data);
                    // genres.forEach((object) => {
                    //     object["editMode"] = false;
                    // })
            })
            .catch((error) => error);
        };

        fetchFavoriteBooks();
        fetchUsername();
        fetchGenres();
    },);
    
    return (
        <div>
            <div>
                <h3>Hi, {username}, you can edit your profile on this page!</h3>
                <span>
                    <form onSubmit={handleSubmitUsername}>
                        <input type="text" value={newUsername} onChange={handleInputChangeUsername}/>
                        <input type="submit" value="Update Username"/>
                    </form>
                </span>
                <span>
                    <p>click <a href="/changepassword">here</a> to change your password.</p>
                </span>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Default User"></img>
            </div>
            <div>
                <h5>Favorite Genres:</h5>
                <ul> 
                    {
                        genres.map(
                            genre =>
                            <div>
                                <span>
                                    <li key={genre.id}>{genre.genreName}</li>
                                    {/* {genre["editMode"] === "true" ? <input key={genre.id} type="text" value={editGenre} onChange={handleInputChangeGenreEdit}/> : <li key={genre.id}>{genre.genreName}</li>} */}
                                    <button onClick={() => fetch("http://localhost:8080/deleteGenre/"+genre.id, {method: "DELETE"})}>Remove</button>
                                    {/* {genre["editMode"] === "true" ? <button onClick={() => handleSubmitGenreEdit(genre)}>Save</button> : <button onClick={() => onClickEditMode(genre)}>Edit</button>} */}
                                </span>
                            </div>
                        )
                    }
                </ul>
                <form onSubmit={handleSubmitGenre}>
                    <input type="text" value={newGenre} onChange={handleInputChangeGenreSubmission}/><input type="submit" value="Add Genre" />
                </form>
            </div>
            <div>
                <h5>Favorite Books</h5>
                <ul> 
                    {
                        favoriteBooks.map(
                            book =>
                            <div>
                                <span>
                                    <li key={book.id}>{book.bookName}</li>
                                    {/* {genre["editMode"] === "true" ? <input key={genre.id} type="text" value={editGenre} onChange={handleInputChangeGenreEdit}/> : <li key={genre.id}>{genre.genreName}</li>} */}
                                    <button onClick={() => fetch("http://localhost:8080/deleteFavoriteBook/"+book.id, {method: "DELETE"})}>Remove</button>
                                    {/* {genre["editMode"] === "true" ? <button onClick={() => handleSubmitGenreEdit(genre)}>Save</button> : <button onClick={() => onClickEditMode(genre)}>Edit</button>} */}
                                </span>
                            </div>
                        )
                    }
                </ul>
                <form onSubmit={handleSubmitFavoriteBook}>
                    <input type="text" value={newFavoriteBook} onChange={handleInputChangeFavoriteBookSubmission}/><input type="submit" value="Add Book" />
                </form>
            </div>
        </div>
    );
}
