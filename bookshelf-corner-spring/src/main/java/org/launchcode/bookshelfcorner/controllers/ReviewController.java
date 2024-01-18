package org.launchcode.bookshelfcorner.controllers;
import org.launchcode.bookshelfcorner.models.Review;
import org.launchcode.bookshelfcorner.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;


   @PostMapping("/submitReview")
    public String submitReview(@RequestBody Review review) {
        Review newReview= new Review(review.getCreatedBy(),review.getBookTitle(), review.getCreatedDate(), review.getText());
        reviewRepository.save(newReview);
        return "submit";

   }

}
