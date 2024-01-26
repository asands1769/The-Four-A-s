//package org.launchcode.bookshelfcorner.models;
//
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//import com.fasterxml.jackson.annotation.JsonManagedReference;
//import jakarta.persistence.*;
//import jakarta.validation.constraints.NotNull;
//
//@Entity
//@Table(name = "bookshelves")
//public class BookShelf extends BookAbstractEntity{
//
//
//    @ManyToOne
//    @JoinColumn(name="Book_category_id")
//    @NotNull(message = "Category is required")
//     @JsonIgnore
//    @JsonManagedReference
//    private BookCategory bookCategory;
//
//    @Column(name = "title")
//    private String title;
//
//    @Column(name = "author")
//    private String author;
//
//    @Column(name = "Year")
//    private int year;
//
////    @Column(name = "Genre")
////    private String genre;
//
//
//    @Column
//    private TagType tagType;
//
//
//
//
//    public BookShelf(BookCategory bookCategory, String title, String author, int year, String genre, String tagType) {
//        this.bookCategory = bookCategory;
//        this.title = title;
//        this.author = author;
//        this.year = year;
////        this.tagType= tagType;
////        this.genre = genre;
//    }
//
//    public BookCategory getBookCategory() {
//        return bookCategory;
//    }
//
//    public void setBookCategory(BookCategory bookCategory) {
//        this.bookCategory = bookCategory;
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
//    public int getYear() {
//        return year;
//    }
//
//    public void setYear(int year) {
//        this.year = year;
//    }
//
//    public TagType getTagType() {
//        return tagType;
//    }
//
//    public void setTagType(TagType tagType) {
//        this.tagType = tagType;
//    }
//    //    public String getGenre() {
////        return genre;
////    }
////
////    public void setGenre(String genre) {
////        this.genre = genre;
////    }
//
//
//}
//
//
//    //@Entity
////@Table
////public class BookShelf {
////    @Id
////    @GeneratedValue(strategy = GenerationType.IDENTITY)
////    private int id;
////    private String name;
////    @OneToMany
////    private List<Book> books;
////
////    // Constructors
////    public BookShelf(List<Book> books) {
////
////        this.books = books;
////    }
////
////    public BookShelf(int id, String name, List<Book> books) {
////            this.id = id;
////            this.name = name;
////            this.books = books;
////        }
////
////    public BookShelf() {
////
////        }
////
////        // Getter and Setter for owner
////        public String getName () {
////            return name;
////        }
////
////        public void setName (String name){
////            this.name = name;
////        }
////
////        // Getter for books
////        public List<Book> getBooks () {
////            return books;
////        }
////
////        // Add a book to the bookshelf
////        public void addBook (Book book) {
////            books.add(book);
////        }
////
//////    // Remove a book from the bookshelf
////        public void removeBook (Book book){
////            books.remove(book);
////        }
////
////    public void addbook(Book book) {
////    }
//
//    // Display the books in the bookshelf
////    public void displayBooks() {
////        System.out.println("Books in " + name + "'s BookShelf:");
//////        for (Book book : books) {
////            System.out.println(book.getTitle() + " by " + book.getAuthor());
////        }
//
////
////
////@Entity
////@Table
////public class BookShelf {
////    @Id
////    @GeneratedValue(strategy = GenerationType.IDENTITY)
////    private int id;
////
////    @Column
////    private String title;
////
////    @Column
////    private String author;
////
////    @OneToMany(mappedBy = "bookShelf", cascade = CascadeType.ALL)
////    @JoinColumn(name = "bookshelf_id")
////    private List<Book> books;
////
////    // Constructors
////    public BookShelf() {
////    }
////
////    public BookShelf(int id, String title, String author) {
////        this.id = id;
////        this.title = title;
////        this.author = author;
////    }
////
////    // Getter and Setter methods
////    public int getId() {
////        return id;
////    }
////
////    public void setId(int id) {
////        this.id = id;
////    }
////
////    public String getTitle() {
////        return title;
////    }
////
////    public void setTitle(String title) {
////        this.title = title;
////    }
////
////    public String getAuthor() {
////        return author;
////    }
////
////    public void setAuthor(String author) {
////        this.author = author;
////    }
////
////    public List<Book> getBooks() {
////        return books;
////    }
////
////    public void setBooks(List<Book> books) {
////        this.books = books;
////    }
////
////    // Add a book to the bookshelf
////    public void addBook(Book book) {
////        books.add(book);
////        //book.setBookShelf(this);
////    }
////
////    // Remove a book from the bookshelf
////    public void removeBook(Book book) {
////        books.remove(book);
////        //book.setBookShelf(null);
////    }
////
////    // toString method for easy printing
////    @Override
////    public String toString() {
////        return "BookShelf{" +
////                "id=" + id +
////                ", title='" + title + '\'' +
////                ", author='" + author + '\'' +
////                '}';
////    }
////}
////
////
//////    public class Main {
//////        public static void main(String[] args) {
//////            BookShelf bookshelf1 = new BookShelf(1, "BookShelf 1", "Author 1");
//////            BookShelf bookshelf2 = new BookShelf(2, "BookShelf 2", "Author 2");
//////
//////            System.out.println(bookshelf1);
//////            System.out.println(bookshelf2);
//////        }
//////    }
////
//
//
//
//
//
//
//
//
