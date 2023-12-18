package org.launchcode.bookshelfcorner.models;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
    public class Book {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int id;
        private static int nextId = 1;

        private String title;
        private String author;
        private String genre;
        public Book() {
        id = nextId;
        nextId++;
        }

        public Book(int id, String title, String author, String genre) {
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

        // Other fields, getters, and setters
    }

