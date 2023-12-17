package org.launchcode.bookshelfcorner.controller;

import org.launchcode.bookshelfcorner.model.BookList;
import org.launchcode.bookshelfcorner.repository.BookListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

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
}
