import React, { useState, useEffect } from 'react'

export default function Profile() {

    const userId = window.sessionStorage.getItem("userId");
    const [username, setUsername] = useState("");
    const [genres, setGenres] = useState([]);
    const [favoriteBooks, setFavoriteBooks] = useState([]);

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
        
        fetchFavoriteBooks();
        fetchUsername();
        fetchGenres();
    },[userId]);

    // const onSubmitAddBook = (e) => {
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

    return (
        <div>
            <div>
                <h3>Hi, {username}, welcome to your profile!</h3>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Default User"></img>
                <p>Click <a href="/EditProfile">here</a> to edit your profile and profile image.</p>
            </div>
            <div>
                <h5>Favorite Genres:</h5>
                <ul> 
                    {
                        genres.map(
                            genre =>
                            <li>{genre.genreName}</li>
                        )
                    }
                </ul>
            </div>
            <div>
                <h5>Favorite Books:</h5>
                <ul>
                    {
                        favoriteBooks.map(
                            book =>
                            <li>{book.bookName}</li>
                        )
                    }
                </ul>
            </div>


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
          </div>
    );
}
