package org.launchcode.bookshelfcorner.repository;

import org.launchcode.bookshelfcorner.models.Book;
//import org.launchcode.bookshelfcorner.models.BookShelf;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends CrudRepository<Book, Integer> {
//all crud databsae methods
}

