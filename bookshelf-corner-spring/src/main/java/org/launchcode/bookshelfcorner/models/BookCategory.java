package org.launchcode.bookshelfcorner.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

import java.util.ArrayList;
import java.util.List;

@Entity
public class BookCategory extends AbstractEntity{


    @OneToMany//(mappedBy = "bookCategory")
    @JoinColumn(name="book_category_id")
    @JsonIgnore
    @JsonBackReference
    private final List<BookShelf> books = new ArrayList<>();

    public BookCategory() {}

    public List<BookShelf> getBookshelf() {
        List<BookShelf> BookShelf = null;
        return BookShelf;
    }



}
