import React from 'react';
import BookShelf from './BookShelf';
import Bookform from './Bookform';

class BookshelfComponent extends React.Component {
    render() {
        const { bookshelf } = this.props;

        return (
            <div>
                <h2>{bookshelf.user}'s Bookshelf</h2>
                <ul>
                    {bookshelf.books.map(book => (
                        <li key={book.title}>{book.title}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default BookshelfComponent;