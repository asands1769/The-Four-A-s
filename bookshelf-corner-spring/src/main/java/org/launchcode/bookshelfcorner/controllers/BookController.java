package org.launchcode.bookshelfcorner.Controllers;

import org.launchcode.bookshelfcorner.exceptions.BookNotFoundException;
import org.launchcode.bookshelfcorner.models.Book;
import org.launchcode.bookshelfcorner.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/book")
public class BookController {

    @Autowired
    private BookRepository bookRepository;


    @GetMapping
    public List<Book> getAllBook() {
        return (List<Book>) bookRepository.findAll();
    }

    //build create book Rest API
    @PostMapping("/create")
    public Book addBook(@RequestBody Book book) {
        return bookRepository.save(book);
    }

    //build get book by id Rest API
    @GetMapping("/book/{id}")
    public ResponseEntity<Book> getBookById(@PathVariable int id) {
        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new BookNotFoundException(id));
        return ResponseEntity.ok(book);
    }
    // build update employee REST API
    @PutMapping("{id}")
    public ResponseEntity<Book> updateBook(@PathVariable int id,@RequestBody Book bookDetails) {
        Book updateBook = bookRepository.findById(id)
                .orElseThrow(() -> new BookNotFoundException(id));

//        updateBook.setBook(bookDetails.getBookCategory());
//        updateBook.setTitle(bookDetails.getTitle());
//        updateBook.setTagtype(bookDetails.getTagtype());

        bookRepository.save(updateBook);

        return ResponseEntity.ok(updateBook);
    }

    // build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<HttpStatus> deleteBook(@PathVariable int id){

        Book book = bookRepository.findById(id)
                .orElseThrow(() -> new BookNotFoundException(id));

        bookRepository.delete(book);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);

    }
}



