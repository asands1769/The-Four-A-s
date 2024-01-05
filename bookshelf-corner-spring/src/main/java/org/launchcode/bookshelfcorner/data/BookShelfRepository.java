package org.launchcode.bookshelfcorner.data;

import org.launchcode.bookshelfcorner.models.BookShelf;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookShelfRepository extends CrudRepository <BookShelf, Integer> {
}
