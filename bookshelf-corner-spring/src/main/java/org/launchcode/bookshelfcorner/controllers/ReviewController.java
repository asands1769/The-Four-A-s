package org.launchcode.bookshelfcorner.controllers;



import org.launchcode.bookshelfcorner.models.Review;
import org.launchcode.bookshelfcorner.repositories.ReviewView;

public class ReviewController {

    private Review review;

    private ReviewView reviewView;


    public ReviewController(Review review, ReviewView reviewView) {
        this.review = review;
        this.reviewView = reviewView;

    }

}
