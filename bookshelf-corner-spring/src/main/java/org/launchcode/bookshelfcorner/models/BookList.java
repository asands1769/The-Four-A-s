package org.launchcode.bookshelfcorner.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Books")
public class BookList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookId;
    @Column(name = "book_title")
    private String bookTitle;
    @Column(name = "book_author")
    private String bookAuthor;
    @Column(name = "published_year")
    private int publishedYear;
    @Column(name = "Genre")
    private String genre;


    public BookList() {
    }

    public BookList(String bookTitle, String bookAuthor, int publishedYear, String genre) {
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.publishedYear = publishedYear;
        this.genre = genre;
    }

    public int getBookId() {
        return bookId;
    }

    public void setBookId(int bookId) {
        this.bookId = bookId;
    }

    public String getBookTitle() {
        return bookTitle;
    }

    public void setBookTitle(String bookTitle) {
        this.bookTitle = bookTitle;
    }

    public String getBookAuthor() {
        return bookAuthor;
    }

    public void setBookAuthor(String bookAuthor) {
        this.bookAuthor = bookAuthor;
    }

    public int getPublishedYear() {
        return publishedYear;
    }

    public void setPublishedYear(int publishedYear) {
        this.publishedYear = publishedYear;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }
}
