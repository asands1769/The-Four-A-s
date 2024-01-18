package org.launchcode.bookshelfcorner.controllers;

import org.launchcode.bookshelfcorner.models.BookList;
import org.launchcode.bookshelfcorner.models.dto.SearchDTO;
import org.launchcode.bookshelfcorner.repository.BookListRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/search")
public class SearchController {
//    @Autowired
//    private BookListRepository bookListRepository;
//
//    //get all book rest api
//    @GetMapping("/books")
//    public List<BookList> getAllBooks() {
//        return bookListRepository.findAll();
//
//    }
//
//    //create bookList rest api
//    @PostMapping("/books")
//    public void createBookList(@RequestBody BookList bookList) {
//        bookListRepository.save(bookList);
//    }
//
//    @PostMapping("/searchInput")
//    public List<BookList> handlingSearchInput(@RequestBody SearchDTO searchDTO) {
//        //use searchInput to search database for book to send to the front
//        return bookListRepository.findAll();
//    }

}