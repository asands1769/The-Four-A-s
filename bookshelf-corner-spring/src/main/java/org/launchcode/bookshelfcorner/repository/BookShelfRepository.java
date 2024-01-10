package org.launchcode.bookshelfcorner.repository;

import jakarta.persistence.Id;
import org.launchcode.bookshelfcorner.models.BookShelf;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface BookShelfRepository extends CrudRepository<BookShelf, Integer> {

}
