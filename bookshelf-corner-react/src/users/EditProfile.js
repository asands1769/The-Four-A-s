import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function EditProfile() {

    const navigate = useNavigate();    
    const userId = window.sessionStorage.getItem("userId");
    const backgroundStyle = {
        background: "eee;"
    };
    const width = {
        width: "150px;"
    }

    
    const [genres, setGenres] = useState([]);
    const [favoriteBooks, setFavoriteBooks] = useState([]);
    const [newGenre, setNewGenre] = useState('');
    const [aboutMe, setAboutMe] = useState('');
    const [newAboutMe, setNewAboutMe] = useState('');
    const [newFavoriteBook, setNewFavoriteBook] = useState('');
    const [username, setUsername] = useState("");
    const [newUsername, setNewUsername] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [newContactInfo, setNewContactInfo] = useState('');
    const [location, setLocation] = useState('');
    const [newLocation, setNewLocation] = useState('');

    function deleteGenre(genreId) {
        fetch("http://localhost:8080/deleteGenre/"+genreId, {method: "DELETE"});
        navigate("/editprofile");
        return navigate(0);
    }

    function deleteBook(bookId) {
        fetch("http://localhost:8080/deleteFavoriteBook/"+bookId, {method: "DELETE"});
        navigate("/editprofile");
        return navigate(0);
    }

    const handleSubmitGenre = (e) => {
        fetch("http://localhost:8080/addGenre/"+userId, {
            method: "POST",
            headers: {
                "content-type": "text/plain"
            },
            body: newGenre.toString()
        })
        setGenres([...genres, {"id":null,"genreName":newGenre}]);
        console.log(genres);
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
        setFavoriteBooks([...favoriteBooks, {"id":null,"user":null,"bookName":newFavoriteBook}]);
        console.log(favoriteBooks);
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
        setUsername(newUsername);
        setNewUsername('');
        e.preventDefault();
    };

    const handleSubmitAboutMe = (e) => {
        fetch("http://localhost:8080/updateAboutMe/"+userId, {
            method: "POST",
            headers: {
                "content-type": "text/plain"
            },
            body: newAboutMe.toString()
        })
        setAboutMe(newAboutMe);
        setNewAboutMe('');
        e.preventDefault();
    };

    const handleSubmitLocation = (e) => {
        fetch("http://localhost:8080/updateLocation/"+userId, {
            method: "POST",
            headers: {
                "content-type": "text/plain"
            },
            body: newLocation.toString()
        })
        setLocation(newLocation);
        setNewLocation('');
        e.preventDefault();
    };

    const handleSubmitContactInfo = (e) => {
        fetch("http://localhost:8080/updateContactInfo/"+userId, {
            method: "POST",
            headers: {
                "content-type": "text/plain"
            },
            body: newContactInfo.toString()
        })
        setContactInfo(newContactInfo);
        setNewContactInfo('');
        e.preventDefault();
    };



    const handleInputChangeLocation = (e) => {
        setNewLocation(e.target.value);
    }

    const handleInputChangeContactInfo = (e) => {
        setNewContactInfo(e.target.value);
    }

    const handleInputChangeAboutMe = (e) => {
        setNewAboutMe(e.target.value);
    }

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

        const fetchAboutMe = async () => {
            await fetch("http://localhost:8080/getAboutMe/"+userId, {
            method: "GET",
            headers: {
                "content-type": "text/plain"
            },
            })
            .then((response) => response.text())
            .then((data) => {
                setAboutMe(data);
            })
            .catch((error) => error);
        };

        const fetchLocation = async () => {
            await fetch("http://localhost:8080/getLocation/"+userId, {
            method: "GET",
            headers: {
                "content-type": "text/plain"
            },
            })
            .then((response) => response.text())
            .then((data) => {
                setLocation(data);
            })
            .catch((error) => error);
        };

        const fetchContactInfo = async () => {
            await fetch("http://localhost:8080/getContactInfo/"+userId, {
            method: "GET",
            headers: {
                "content-type": "text/plain"
            },
            })
            .then((response) => response.text())
            .then((data) => {
                setContactInfo(data);
            })
            .catch((error) => error);
        };

        fetchContactInfo();
        fetchLocation();
        fetchAboutMe();
        fetchFavoriteBooks();
        fetchUsername();
        fetchGenres();

    },[userId,setGenres,setFavoriteBooks]);
   
    
    
    return (
    <section style={backgroundStyle}>
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-4">
                    <div class="card mb-4">
                        <div class="card-body text-center">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Default Avatar"
                            class="rounded-circle img-fluid" style={width}></img>
                            <h5 class="my-3">{username}</h5>
                            <p class="mb-0">About me:</p><br />
                            <p class="text-muted mb-1">{aboutMe}</p><br />
                            <div class="mb-4 mt-1">
                                <form onSubmit={handleSubmitAboutMe}>
                                            <input type="text" class="form-control mb-2" value={newAboutMe} placeholder="Update about me" onChange={handleInputChangeAboutMe}/>
                                            <input class="btn btn-secondary" type="submit" value="Update"/>
                                </form>
                            </div>
                            <div class="d-flex justify-content-center mb-4">
                                <a href="/Profile" class="btn btn-primary">View Profile</a>
                            </div>
                            <div class="row">
                                <p>Click <a href="/changepassword">here</a> to change your password.</p>
                            </div>
                        </div>
                    </div>
                </div>   
                <div class="col-lg-8">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">{username}</p>
                                </div>
                                <div class="col-sm-9">
                                    <form onSubmit={handleSubmitUsername}>
                                        <input type="text" class="form-control mb-2" value={newUsername} placeholder="Update username" onChange={handleInputChangeUsername}/>
                                        <input class="btn btn-secondary" type="submit" value="Update"/>
                                    </form>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">{contactInfo}</p>
                                </div>
                                <div class="col-sm-9">
                                    <form onSubmit={handleSubmitContactInfo}>
                                        <input type="text" class="form-control mb-2" value={newContactInfo} placeholder="Update contact info" onChange={handleInputChangeContactInfo}/>
                                        <input class="btn btn-secondary" type="submit" value="Update"/>
                                    </form>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-sm-3">
                                    <p class="mb-0">{location}</p>
                                </div>
                                <div class="col-sm-9">
                                    <form onSubmit={handleSubmitLocation}>
                                        <input type="text" class="form-control mb-2" value={newLocation} placeholder="Update location" onChange={handleInputChangeLocation}/>
                                        <input class="btn btn-secondary" type="submit" value="Update"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                
            
            <div class="row">
                <div class="col-md-6">
                    <div class="card mb-4 mb-md-0">
                        <div class="card-body">
                            <p class="mb-4"><span class="text-secondary font-italic me-1">Favorite</span> Books
                            </p>
                            <div class="row">
                                <ul class="list-group mb-2"> 
                                {
                                    favoriteBooks.map(
                                        book =>
                                        <li key={book.id} class="list-group-item">{book.bookName}
                                            <div>
                                                <button class="btn btn-secondary ml-5" onClick={() => deleteBook(book.id)}>X</button>
                                            </div>
                                        </li>
                                    )
                                }
                                </ul>
                                <div class="row">
                                    <form onSubmit={handleSubmitFavoriteBook}>
                                        <input type="text" class="form-control mb-2" value={newFavoriteBook} placeholder="Add book" onChange={handleInputChangeFavoriteBookSubmission}/>
                                        <input class="btn btn-secondary" type="submit" value="Add"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card mb-4 mb-md-0">
                        <div class="card-body">
                            <p class="mb-4"><span class="text-secondary font-italic me-1">Favorite</span> Genres
                            </p>
                            <div class="row">
                                <ul class="list-group mb-2"> 
                                {
                                    genres.map(
                                        genre =>
                                        
                                            <li key={genre.id} class="list-group-item">{genre.genreName}
                                                <div>
                                                    <button class="btn btn-secondary ml-5" onClick={() => deleteGenre(genre.id)}>X</button>
                                                </div>
                                            </li>
                                    )
                                }
                                </ul>
                                <div class="row">
                                    <form onSubmit={handleSubmitGenre}>
                                        <input type="text" class="form-control mb-2" value={newGenre} placeholder="Add genre" onChange={handleInputChangeGenreSubmission}/>
                                        <input class="btn btn-secondary" type="submit" value="Add"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
        // <div>
        //     <div>
        //         <h3>Hi, {username}, you can edit your profile on this page!</h3>
        //         <span>
        //             <form onSubmit={handleSubmitUsername}>
        //                 <input type="text" value={newUsername} onChange={handleInputChangeUsername}/>
        //                 <input type="submit" value="Update Username"/>
        //             </form>
        //         </span>
        //         <span>
        //             <p>click <a href="/changepassword">here</a> to change your password.</p>
        //         </span>
        //         <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Default User"></img>
        //     </div>
        //     <div>
        //         <h5>Favorite Genres:</h5>
        //         <ul> 
        //             {
        //                 genres.map(
        //                     genre =>
        //                     <div>
        //                         <span>
        //                             <li key={genre.id}>{genre.genreName}</li>
        //                             {/* {genre["editMode"] === "true" ? <input key={genre.id} type="text" value={editGenre} onChange={handleInputChangeGenreEdit}/> : <li key={genre.id}>{genre.genreName}</li>} */}
        //                             <button onClick={() => fetch("http://localhost:8080/deleteGenre/"+genre.id, {method: "DELETE"})}>Remove</button>
        //                             {/* {genre["editMode"] === "true" ? <button onClick={() => handleSubmitGenreEdit(genre)}>Save</button> : <button onClick={() => onClickEditMode(genre)}>Edit</button>} */}
        //                         </span>
        //                     </div>
        //                 )
        //             }
        //         </ul>
        //         <form onSubmit={handleSubmitGenre}>
        //             <input type="text" value={newGenre} onChange={handleInputChangeGenreSubmission}/><input type="submit" value="Add Genre" />
        //         </form>
        //     </div>
        //     <div>
        //         <h5>Favorite Books</h5>
        //         <ul> 
        //             {
        //                 favoriteBooks.map(
        //                     book =>
        //                     <div>
        //                         <span>
        //                             <li key={book.id}>{book.bookName}</li>
        //                             {/* {genre["editMode"] === "true" ? <input key={genre.id} type="text" value={editGenre} onChange={handleInputChangeGenreEdit}/> : <li key={genre.id}>{genre.genreName}</li>} */}
        //                             <button onClick={() => fetch("http://localhost:8080/deleteFavoriteBook/"+book.id, {method: "DELETE"})}>Remove</button>
        //                             {/* {genre["editMode"] === "true" ? <button onClick={() => handleSubmitGenreEdit(genre)}>Save</button> : <button onClick={() => onClickEditMode(genre)}>Edit</button>} */}
        //                         </span>
        //                     </div>
        //                 )
        //             }
        //         </ul>
        //         <form onSubmit={handleSubmitFavoriteBook}>
        //             <input type="text" value={newFavoriteBook} onChange={handleInputChangeFavoriteBookSubmission}/><input type="submit" value="Add Book" />
        //         </form>
        //         <div>
        //             <h3>About Me:</h3>
        //             <p>{aboutMe}</p>
        //             <div>
        //             <form onSubmit={handleSubmitAboutMe}>
        //                 <input type="text" value={newAboutMe} onChange={handleInputChangeAboutMe}/><input type="submit" value="Update" />
        //             </form>
        //             </div>
        //         </div>
        //         <div>
        //             <h5>Best way to contact me:</h5>
        //             <p>{contactInfo}</p>
        //             <div>
        //             <form onSubmit={handleSubmitContactInfo}>
        //                 <input type="text" value={newContactInfo} onChange={handleInputChangeContactInfo}/><input type="submit" value="Update" />
        //             </form>
        //             </div>
        //         </div>
        //         <div>
        //             <h5>My Location:</h5>
        //             <p>{location}</p>
        //             <div>
        //             <form onSubmit={handleSubmitLocation}>
        //                 <input type="text" value={newLocation} onChange={handleInputChangeLocation}/><input type="submit" value="Update" />
        //             </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

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
