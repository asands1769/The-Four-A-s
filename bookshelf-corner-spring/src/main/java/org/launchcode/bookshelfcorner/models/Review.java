package org.launchcode.bookshelfcorner.models;

import jakarta.persistence.Entity;

import java.time.LocalDate;

@Entity
public class Review {

    private String user;

    private LocalDate date;

    private String content;

    private Integer rating;

    public Review() {

    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }
}
