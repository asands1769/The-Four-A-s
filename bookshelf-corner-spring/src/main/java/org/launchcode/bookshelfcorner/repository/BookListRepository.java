package org.launchcode.bookshelfcorner.repository;

import org.launchcode.bookshelfcorner.models.BookList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface BookListRepository extends JpaRepository<BookList, Integer> {
    //List<BookList> findByAvailable(boolean isAvailable);
}
