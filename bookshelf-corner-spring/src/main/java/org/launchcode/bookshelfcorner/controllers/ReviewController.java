package org.launchcode.bookshelfcorner.controllers;



import org.launchcode.bookshelfcorner.models.Review;
import org.launchcode.bookshelfcorner.models.data.ReviewRepository;


public class ReviewController {

    private Review review;

    private ReviewRepository reviewRepository;


    public ReviewController(Review review, ReviewRepository reviewRepository) {
        this.review = review;
        this.reviewRepository = reviewRepository;

    }

}
