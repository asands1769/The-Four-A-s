package org.launchcode.bookshelfcorner.repository;

import org.launchcode.bookshelfcorner.models.Review;
import org.springframework.data.jpa.repository.support.CrudMethodMetadata;
import org.springframework.data.repository.CrudRepository;

public interface ReviewRepository extends CrudRepository<Review, Integer> {
}
