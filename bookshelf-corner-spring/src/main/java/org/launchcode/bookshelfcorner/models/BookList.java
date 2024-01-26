package org.launchcode.bookshelfcorner.models;

import jakarta.persistence.*;

@Entity
@Table(name = "Books")
public class BookList {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookId;
    @Column(name = "title")
    private String bookTitle;
    @Column(name = "author")
    private String bookAuthor;
    @Column(name = "publishedYear")
    private int publishedYear;
    @Column(name = "Genre")
    private String genre;
//    private String title;

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

//    public String getTitle() {
//        return title;
//    }
//
//    public void setTitle(String title) {
//        this.title = title;
//    }
//
//    public void setAuthor(String author) {
//        this.bookAuthor = author;
//    }
//
//    public String getAuthor() {
//        return bookAuthor;
//    }
}
