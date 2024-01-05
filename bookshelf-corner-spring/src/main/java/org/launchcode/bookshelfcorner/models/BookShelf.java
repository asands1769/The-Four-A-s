package org.launchcode.bookshelfcorner.models;


import jakarta.persistence.*;

@Entity
@Table (name = "Book")
    public class BookShelf {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int id;
        private static int nextId = 1;
    @Column
        private String title;
    @Column
        private String author;
    @Column
        private String genre;
        public BookShelf() {
        id = nextId;
        nextId++;
        }

        public BookShelf(int id, String title, String author, String genre) {
            this.id = id;
            this.title = title;
            this.author = author;
            this.genre = genre;
        }

        public int getId() {
            return id;
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

        public String getGenre() {
            return genre;
        }

        public void setGenre(String genre) {
            this.genre = genre;
        }

    @Override
    public String toString() {
        return "Book{" +
                "title='" + title + '\'' +
                ", author='" + author + '\'' +
                ", genre='" + genre + '\'' +
                '}';
    }
    // Other fields, getters, and setters
    }

