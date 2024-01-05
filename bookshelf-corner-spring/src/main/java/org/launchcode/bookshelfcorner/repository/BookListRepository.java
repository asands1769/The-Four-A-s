package org.launchcode.bookshelfcorner.repository;

import org.launchcode.bookshelfcorner.model.BookList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookListRepository extends JpaRepository<BookList, Integer> {
}
