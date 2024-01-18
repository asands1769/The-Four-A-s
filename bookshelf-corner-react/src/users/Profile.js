import React, { useState, useEffect } from 'react'

export default function Profile() {

    const userId = window.sessionStorage.getItem("userId");
    const backgroundStyle = {
        background: "eee;"
    };
    const width = {
        width: "150px;"
    }

    
    const [username, setUsername] = useState("");
    const [genres, setGenres] = useState([]);
    const [favoriteBooks, setFavoriteBooks] = useState([]);
    const [aboutMe, setAboutMe] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [location, setLocation] = useState('');

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
    },[userId]);

    window.sessionStorage.setItem("username", username);

    return (
    <body class="text-center bg">
        <section style={backgroundStyle}>
            <div id="white-bg" class="container p-5 d-flex h-100 mx-auto flex-column align-items-center">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="card mb-4">
                            <div class="card-body text-center">
                                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Default Avatar"
                                class="rounded-circle img-fluid" style={width}></img>
                                <h5 class="my-3">{username}</h5>
                                <p class="mb-0">About me:</p><br />
                                <p class="text-muted mb-1">{aboutMe}</p><br />
                                <div class="d-flex justify-content-center mb-2">
                                    <a href="/EditProfile" class="btn btn-primary">Edit Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <div class="col-lg-8">
                        <div class="card mb-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Username</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{username}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Contact me</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{contactInfo}</p>
                                    </div>
                                </div>
                                <hr />
                                <div class="row">
                                    <div class="col-sm-3">
                                        <p class="mb-0">Location</p>
                                    </div>
                                    <div class="col-sm-9">
                                        <p class="text-muted mb-0">{location}</p>
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
                                    <ul class="list-group mb-1"> 
                                    {
                                        favoriteBooks.map(
                                            book =>
                                            <li class="list-group-item">{book.bookName}</li>
                                        )
                                    }
                                    </ul>
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
                                    <ul class="list-group mb-1"> 
                                    {
                                        genres.map(
                                            genre =>
                                            <li class="list-group-item">{genre.genreName}</li>
                                        )
                                    }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </section>
    </body>

                        
        );
    }

                




{/* const onSubmitAddBook = (e) => {
    // e.preventDefault();

    // const formData = new FormData(e.target);

    // fetch("http://localhost:8080/addBook", {
    //     method: "POST",
    //     headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //     title: formData.get('title'),
    //     author: formData.get('author'),
    //     }),
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
    //     if(data.fieldErrors) {
    //         data.fieldErrors.forEach(fieldError => {
    //         if(fieldError.field === 'email'){
    //             setEmailError(fieldError.message);
    //         }
    //         if(fieldError.field === 'username'){
    //             setUsernameError(fieldError.message);
    //             }
    //         if(fieldError.field === 'password'){
    //             setPasswordError(fieldError.message);
    //         }
    //         });
    //     } else {
            
    //         alert("You have succesfully added a book to share.");
    //         return navigate(0);
    //     }
    //     })
    //     .catch((err) => err);
    // }
    // }
*/}
    {/* <span>
                  <h5>Add a new book to share</h5>
              </span>
              <form method="POST" autoComplete="off" onSubmit={onSubmit}>
                  <div>
                  <label htmlFor="title">Book Title</label>
                  <input type="text" name="title" />
                  </div>
                  <div>
                  <label htmlFor="author">Author</label>
                  <input type="text" name="author" />
                  </div>
                  <div>
                      <label htmlFor="yearPublsihed">Year Published</label> 
                      <input type="number" name="yearPublished" />
                  </div>
                  <div>
                      <input type="submit" name="submit" value="Add Book"/>
                  </div>
              </form> */}