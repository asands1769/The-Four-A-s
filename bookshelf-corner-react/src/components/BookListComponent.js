import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import React, { useState, useEffect } from 'react';

class BookListComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            books: []

        }
        this.addBookList = this.addBookList.bind(this);
        
    }
    

    componentDidMount() {
    fetch('http://localhost:8080/api/books')
        .then(response => response.json())
        .then(data => {
            this.setState({ books: data });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

    // // create add BookList method
    // addBookList(){
    //     this.props.history.push('/addBookList');
    // }
    // create add BookList method
    addBookList() {
        //<button className='btn btn-primary' onClick={this.addBookList}>Add Book</button>
        return (
            <Link to="/addBookList" className='btn btn-success'>
                Add Book
            </Link>
        );
    }
    wishList() {
        //<button className='btn btn-primary' onClick={this.wishList}>Add wishList</button>
        return (
            <Link to="/wishList" className='btn btn-primary'>
                Add wishList
            </Link>
        );
    }
    viewBook() {
        //<button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
        return (
            <Link to="/viewBookList" className='btn btn-info'>
                View
            </Link>
        );
        }

    render() {
        return (
            <div>
                
                <div className='text-left'>
                    {this.addBookList()}   {this.wishList()}  
                </div>

               <h2 className='text-center'>Book List</h2>
                <div className='row'>
                    <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>Book Title</th>
                                    <th>Book Author</th>
                                    <th>Published Year</th>
                                    <th>Genre</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                        <tbody>
                            {
                                this.state.books.map(
                                    book =>
                                    <tr key={book.bookId}>
                                        <td>{book.bookTitle}</td>
                                        <td>{book.bookAuthor}</td>
                                        <td>{book.publishedYear}</td>
                                        <td>{book.genre}</td>
                                        <td>
                                            <Link to="/viewBookList" className='btn btn-info' style={{marginLeft:"10px"}}>View</Link>
                                        </td>
                                        

                                    </tr>
                                )
                            }

                        </tbody>

                    </table>

                </div>
                
            </div>
        );
    }
}

export default BookListComponent;

