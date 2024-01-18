package org.launchcode.bookshelfcorner.controllers;

import org.launchcode.bookshelfcorner.models.BookList;
import org.launchcode.bookshelfcorner.repository.BookListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api")
public class BookListController {
    @Autowired
    private BookListRepository bookListRepository;

    //get all book rest api
    @GetMapping("/books")
    public List<BookList> getAllBooks() {
        return bookListRepository.findAll();

    }
    //create bookList rest api
    @PostMapping("/books")
    public void  createBookList( @RequestBody BookList bookList){
         bookListRepository.save(bookList);
    }
}

