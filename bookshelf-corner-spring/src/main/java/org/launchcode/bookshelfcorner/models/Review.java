package org.launchcode.bookshelfcorner.models;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import java.time.LocalDate;


@Entity
@Table(name="reviews")
public class Review extends AbstractEntity{

    @NotNull
    private String createdBy;


    @NotNull
    private String bookTitle;

    @NotNull
    private LocalDate createdDate;

    @NotNull
    private String text;


    public Review(String bookTitle, String createdBy, LocalDate createdDate, String text) {
        super();
        this.bookTitle= bookTitle;
        this.createdBy= createdBy;
        this.createdDate= createdDate;
        this.text= text;
   }

    public String getCreatedBy() {
        return createdBy;
    }

    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    public String getBookTitle() {
        return bookTitle;
    }

    public void setBookTitle(String bookTitle) {
        this.bookTitle = bookTitle;
    }

    public LocalDate getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(LocalDate createdDate) {
        this.createdDate = createdDate;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

}
