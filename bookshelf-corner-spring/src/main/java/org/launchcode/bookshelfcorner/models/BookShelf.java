package org.launchcode.bookshelfcorner.models;

import jakarta.persistence.*;

//import java.awt.print.Book;
import java.util.HashSet;
import java.util.List;

@Entity
public class BookShelf {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private User user;
    private Set<BookList> books = new HashSet<>();
    public BookShelf(int id, User user) {
        this.id = id;
        this.user = user;
    }


    public int getId() {
        return id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }


    public Set<BookList> getBooks() {
        return books;
    }

    public void setBooks(Set<BookList> books) {
        this.books = books;
    }

    @Override
    public boolean equals(Object obj) {
        return super.equals(obj);
    }
}

