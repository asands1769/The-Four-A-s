package org.launchcode.bookshelfcorner.controllers;

import org.launchcode.bookshelfcorner.models.BookList;
import org.launchcode.bookshelfcorner.repository.BookListRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/books")
public class BookListController {
    @Autowired
    private BookListRepository bookListRepository;

    //get all book rest api
    @GetMapping("/books")
    public List<BookList> getBooks() {
        return bookListRepository.findAll();

    }
    //create bookList rest api
    @PostMapping("/books")
    public void addBook( @RequestBody BookList bookList){
        bookListRepository.save(bookList);
    }
    //get bookList ById rest api
    @GetMapping("/books/{bookId}")
    public BookList getBookById(@PathVariable int bookId) {
        return bookListRepository.findById(bookId).orElse(null);
    }

    //update bookList rest api
    @PutMapping("/books/{bookId}")
    public BookList updateBook(@PathVariable int bookId, @RequestBody BookList updatedBook) {
        BookList existingBook = bookListRepository.findById(bookId).orElse(null);
        if (existingBook != null) {
            existingBook.setBookTitle(updatedBook.getBookTitle());
            existingBook.setBookAuthor(updatedBook.getBookAuthor());
            existingBook.setPublishedYear(updatedBook.getPublishedYear());
            existingBook.setGenre(updatedBook.getGenre());
            return bookListRepository.save(existingBook);
        }
        return null;
    }






}
