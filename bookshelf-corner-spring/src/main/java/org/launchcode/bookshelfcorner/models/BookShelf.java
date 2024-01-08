package org.launchcode.bookshelfcorner.models;


import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class BookShelf  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    @OneToMany
    private final List<Book> books;

    // Constructors


    public BookShelf(int id, String name, List<Book> books) {
        this.id = id;
        this.name = name;
        this.books = books;
    }

    // Getter and Setter for owner
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Getter for books
    public List<Book> getBooks() {
        return books;
    }

    // Add a book to the bookshelf
    public void addBook(Book book) {
        books.add(book);
    }

    // Remove a book from the bookshelf
    public void removeBook(Book book) {
        books.remove(book);
    }

    // Display the books in the bookshelf
    public void displayBooks() {
        System.out.println("Books in " + name + "'s BookShelf:");
        for (Book book : books) {
            System.out.println(book.getTitle() + " by " + book.getAuthor());
        }
    }

    public Integer getId() {
        return id;
    }
}

