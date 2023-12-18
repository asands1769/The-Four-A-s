package org.launchcode.bookshelfcorner.data;

import org.launchcode.bookshelfcorner.models.Book;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends CrudRepository <Book, Integer> {
}
