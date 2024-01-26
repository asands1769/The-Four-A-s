package org.launchcode.bookshelfcorner.models;

import jakarta.persistence.*;
import org.springframework.data.annotation.Id;

@Entity
@Table(name = "Book")
public class Book extends BookAbstractEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "title")
    private String title;

    @Column(name = "book_category")
    private String book_category;

    @Column(name = "tag_type")
    private String tag_type;

    public Book() {
    }

    public Book(int id, String title, String book_category, String tag_type) {
        this.id = id;
        this.title = title;
        this.book_category = book_category;
        this.tag_type = tag_type;
    }

    // Getters and setters

    @Override
    public String toString() {
        return "Book{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", bookCategory='" + book_category + '\'' +
                ", tagtype='" + tag_type + '\'' +
                '}';
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setBook_Category(String book_category) {
        this.book_category = book_category;
    }

    public void setTag_type(String tag_type) {
        this.tag_type = tag_type;
    }



}

