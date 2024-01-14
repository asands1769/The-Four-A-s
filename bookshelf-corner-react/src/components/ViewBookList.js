import React, { Component } from 'react';

class ViewBookList extends Component {
    constructor(props){
        super(props)

        this.state = {
            bookId: this.props.match ? this.props.match.params.bookId : '',
            books: {}
            };
    }
     componentDidMount() {
        // 
        fetch(`http://localhost:8080/api/books${this.state.bookId}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ books: data });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3'>
                <h3 className='text-center'>View BookList Page</h3>
                <div className='card-body'>
                    <div className='row'>
                        <label>Book Title: </label>
                        <div>{this.state.books.bookTitle}</div>
                    </div>

                    <div className='row'>
                        <label>Book Author: </label>
                        <div>{this.state.books.bookAuthor}</div>
                    </div>

                    <div className='row'>
                        <label>Published Year: </label>
                        <div>{this.state.books.publishedYear}</div>
                    </div>

                    <div className='row'>
                        <label>Genre: </label>
                        <div>{this.state.books.genre}</div>
                    </div>
                    <div className='text-center'>{this.state.books.isAvailable ? 'Available to borrow' : 'Not Available'}</div>

                </div>
                </div>
            </div>
        );
    }
}

export default ViewBookList;