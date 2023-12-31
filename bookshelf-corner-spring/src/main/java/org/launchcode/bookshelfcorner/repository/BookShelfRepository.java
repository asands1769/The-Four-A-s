package org.launchcode.bookshelfcorner.models.data;

import jakarta.persistence.Id;
import org.launchcode.bookshelfcorner.models.BookShelf;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookShelfRepository extends CrudRepository<BookShelf, Integer> {
    Optional<BookShelf> findById(Long id);

    void deleteById(Long id);
}
