import React, { Component } from 'react';
import BookListService from '../services/BookListService';

class BookListComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            books: []

        }
    }

    //here the place to call rest Api
    componentDidMount(){
        BookListService.getBookList().then((Response) =>{
            this.setState({books: Response.data});//response data to books array books:[]

        });
    }

    render() {
        return (
            <div>
                <h2 className='text-left'>Book List</h2>
                <div className='row'>
                    <table className='table table-striped table-border'>
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