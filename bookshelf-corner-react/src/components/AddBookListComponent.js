import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//import BookListServiceFetch from '../services/BookListServiceFetch';

class AddBookListComponent extends Component {
    constructor(props) {
        super(props);
// Clear form fields after submission
        this.state = {
            bookTitle: '',
            bookAuthor: '',
            publishedYear: '',
            genre: '',
        };

        // Binding
        this.titleHandler = this.titleHandler.bind(this);
        this.authorHandler = this.authorHandler.bind(this);
        this.publishedYearHandler = this.publishedYearHandler.bind(this);
        this.genreHandler = this.genreHandler.bind(this);
        this.saveBook = this.saveBook.bind(this);
    }
   // Create event handler for adding a book
  
saveBook = async (event) => {
        event.preventDefault();

        // let bookList = {
        //     bookTitle: this.state.bookTitle,
        //     bookAuthor: this.state.bookAuthor,
        //     publishedYear: this.state.publishedYear,
        //     genre: this.state.genre,
        // };

        //console.log('bookList => ' + JSON.stringify(bookList));

        // Validation checks
        // Check if any required field is empty
    const isEmpty = [ 'bookTitle', 'bookAuthor', 'publishedYear', 'genre' ]
        .some(field => !this.state[field]);

        if (isEmpty) {
        console.error('Please fill in all fields.');
        return;
        }

    // Prepare the payload
        const bookList = {
            bookTitle: this.state.bookTitle,
            bookAuthor: this.state.bookAuthor,
            publishedYear: this.state.publishedYear,
            genre: this.state.genre,
        };

    // Make the API request
    fetch('http://localhost:8080/api/books', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookList })
    })
        .then(response => response.json())
        .then(data => console.log('BookListComponent added successfully', data))
        .catch(error => console.error('Error adding BookListComponent:', error));
    }
        //create event handler 
    titleHandler = (event) => {
        this.setState({ bookTitle: event.target.value });
    };

    authorHandler = (event) => {
        this.setState({ bookAuthor: event.target.value });
    };

    publishedYearHandler = (event) => {
        this.setState({ publishedYear: event.target.value });
    };

    genreHandler = (event) => {
        this.setState({ genre: event.target.value });
    }

    
    // cancel() {
    //     this.props.history.push('/bookList');
    // }

    cancel() {
        //<button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
        return (
            <Link to="/bookList" className='btn btn-danger'>
                Cancel
            </Link>
        );
        }

    render() {
        return (
        
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h2 className='text-center'>Add your Book</h2>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Book Title: </label>
                                        <input placeholder ="Book Title" name ='bookTitle' className ='force-control' 
                                        value= {this.state.bookTitle} onChange= {this.titleHandler} />
                                    </div>

                                     <div className='form-group'>
                                        <label>Book Author:  </label>
                                        <input placeholder ="Book Author" name ='bookAuthor' className ='force-control' 
                                        value= {this.state.bookAuthor} onChange= {this.authorHandler} />
                                    </div>

                                     <div className='form-group'>
                                        <label>Published Year : </label>
                                        <input placeholder ="Published Year" name ='publishedYear' className ='force-control' 
                                        value= {this.state.publishedYear} onChange= {this.publishedYearHandler} />
                                    </div>

                                    <div className='form-group'>
                                        <label>Genre:</label>
                                        <input placeholder ="Genre" name ='genre' className ='force-control' 
                                        value= {this.state.genre} onChange= {this.genreHandler} />
                                    </div>

                                    <button className='btn btn-success' onClick={this.saveBook}>Add</button>
                                    <Link to="/bookList" className='btn btn-danger' style={{marginLeft:"10px"}}>Cancel</Link>
                                   
                                </form>
                            </div>
                             
                        </div>
                    </div>
                </div>
            </div>
        );
        }
    }



export default AddBookListComponent;