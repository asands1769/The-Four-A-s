package org.launchcode.bookshelfcorner.models;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.hibernate.boot.model.relational.Namespace;
import org.hibernate.boot.model.relational.Sequence;

import java.util.List;

@Entity
public class BookShelf extends AbstractEntity{

    @ManyToOne
    @JoinColumn(name="Book_category_id")
    @NotNull(message = "Category is required")
    // @JsonIgnore
    //@JsonManagedReference
    private BookCategory bookCategory;

    @ManyToOne
    private BookList booklist;

    private TagType TagType;

    public BookShelf(BookCategory bookCategory,BookList bookList, TagType tagType) {
        this.bookCategory = bookCategory;
        this.booklist = new BookList();
        this.TagType = tagType;
    }
    public BookShelf() {}


        public BookCategory getBookCategory () {
            return bookCategory;
        }

        public void setBookCategory (BookCategory bookCategory){
            this.bookCategory = bookCategory;
        }

        public BookList getBooklist () {
            return booklist;
        }

        public void setBooklist (BookList booklist){
            this.booklist = booklist;
        }

        public TagType getTagType () {
            return TagType;
        }

        public void setTagType (TagType tagType){
            TagType = tagType;
        }
    }


    //@Entity
//@Table
//public class BookShelf {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int id;
//    private String name;
//    @OneToMany
//    private List<Book> books;
//
//    // Constructors
//    public BookShelf(List<Book> books) {
//
//        this.books = books;
//    }
//
//    public BookShelf(int id, String name, List<Book> books) {
//            this.id = id;
//            this.name = name;
//            this.books = books;
//        }
//
//    public BookShelf() {
//
//        }
//
//        // Getter and Setter for owner
//        public String getName () {
//            return name;
//        }
//
//        public void setName (String name){
//            this.name = name;
//        }
//
//        // Getter for books
//        public List<Book> getBooks () {
//            return books;
//        }
//
//        // Add a book to the bookshelf
//        public void addBook (Book book) {
//            books.add(book);
//        }
//
////    // Remove a book from the bookshelf
//        public void removeBook (Book book){
//            books.remove(book);
//        }
//
//    public void addbook(Book book) {
//    }

    // Display the books in the bookshelf
//    public void displayBooks() {
//        System.out.println("Books in " + name + "'s BookShelf:");
////        for (Book book : books) {
//            System.out.println(book.getTitle() + " by " + book.getAuthor());
//        }

//
//
//@Entity
//@Table
//public class BookShelf {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int id;
//
//    @Column
//    private String title;
//
//    @Column
//    private String author;
//
//    @OneToMany(mappedBy = "bookShelf", cascade = CascadeType.ALL)
//    @JoinColumn(name = "bookshelf_id")
//    private List<Book> books;
//
//    // Constructors
//    public BookShelf() {
//    }
//
//    public BookShelf(int id, String title, String author) {
//        this.id = id;
//        this.title = title;
//        this.author = author;
//    }
//
//    // Getter and Setter methods
//    public int getId() {
//        return id;
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public String getTitle() {
//        return title;
//    }
//
//    public void setTitle(String title) {
//        this.title = title;
//    }
//
//    public String getAuthor() {
//        return author;
//    }
//
//    public void setAuthor(String author) {
//        this.author = author;
//    }
//
//    public List<Book> getBooks() {
//        return books;
//    }
//
//    public void setBooks(List<Book> books) {
//        this.books = books;
//    }
//
//    // Add a book to the bookshelf
//    public void addBook(Book book) {
//        books.add(book);
//        //book.setBookShelf(this);
//    }
//
//    // Remove a book from the bookshelf
//    public void removeBook(Book book) {
//        books.remove(book);
//        //book.setBookShelf(null);
//    }
//
//    // toString method for easy printing
//    @Override
//    public String toString() {
//        return "BookShelf{" +
//                "id=" + id +
//                ", title='" + title + '\'' +
//                ", author='" + author + '\'' +
//                '}';
//    }
//}
//
//
////    public class Main {
////        public static void main(String[] args) {
////            BookShelf bookshelf1 = new BookShelf(1, "BookShelf 1", "Author 1");
////            BookShelf bookshelf2 = new BookShelf(2, "BookShelf 2", "Author 2");
////
////            System.out.println(bookshelf1);
////            System.out.println(bookshelf2);
////        }
////    }
//








