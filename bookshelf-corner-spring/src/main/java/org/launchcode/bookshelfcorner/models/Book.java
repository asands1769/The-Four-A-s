package org.launchcode.bookshelfcorner.models;

import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;
    private String author;

    @ManyToMany(mappedBy = "books")
    private List<BookShelf> bookshelves;

    public Book(int id, String title, String author, List<BookShelf> bookshelves) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.bookshelves = bookshelves;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public List<BookShelf> getBookShelves() {
        return bookshelves;
    }

    public void setBookshelves(List<BookShelf> bookshelves) {
        this.bookshelves = bookshelves;
    }
// Constructors, getters, and setters

    // Other methods
}