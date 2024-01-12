package org.launchcode.bookshelfcorner.Controllers.API;

import org.launchcode.bookshelfcorner.exceptions.BookShelfNotFoundException;
import org.launchcode.bookshelfcorner.models.BookShelf;
import org.launchcode.bookshelfcorner.repository.BookShelfRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin  (origins = "http://localhost:3000")
@RestController
@RequestMapping("bookshelves")
public class APIBookShelfController {
    @Autowired
    private BookShelfRepository bookshelfRepository;
//    @Autowired
//    private BooklistRepository booklistRepository;
    @GetMapping
    public Iterable<BookShelf> getAllBook () {
        return bookshelfRepository.findAll();
    }
    @PostMapping("create")
    public BookShelf addBook (@RequestBody BookShelf bookShelf) {
        return bookshelfRepository.save(bookShelf);
    }
    @GetMapping("/{id}")
    public  BookShelf getBookByID(@PathVariable int id) {
        return bookshelfRepository.findById(id).orElseThrow(() -> new BookShelfNotFoundException(id));
    }
    @PutMapping("/{id}")
    public BookShelf updateBook(@RequestBody BookShelf bookShelf, @PathVariable int id) {
        return bookshelfRepository.findById(id)
                .map(BookShelf1 -> {
                    BookShelf1.setBooklist(BookShelf1.getBooklist());
                    BookShelf1.setBookCategory(BookShelf1.getBookCategory());
                    BookShelf1.setTagType(BookShelf1.getTagType());
                    return bookshelfRepository.save(bookShelf);
                }).orElseThrow(() -> new BookShelfNotFoundException(id));
    }

    @DeleteMapping("/{id}")
    public String deleteBookshelf(@PathVariable int id) {
        if (!bookshelfRepository.existsById(id)) {
            throw new BookShelfNotFoundException(id);
        }
        bookshelfRepository.deleteById(id);
        return "Bookshelf with id " + id + " has been deleted successfully.";
    }




}

//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/api/bookshelves")
//public class APIBookShelfController {
//
//    @Autowired
//    private BookShelfRepository bookShelfRepository;
//
//    @GetMapping
//    public ResponseEntity<?> getAllBookshelves() {
//
//        List<BookShelf> bookShelves = (List<BookShelf>) bookShelfRepository.findAll();
//        return new ResponseEntity<>(bookShelves, HttpStatus.OK);
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<?> getBookShelfById(@PathVariable Integer id) {
//
//        Optional<BookShelf> bookShelfOptional = bookShelfRepository.findById(id);
//        if (bookShelfOptional.isPresent()) {
//            return new ResponseEntity<>(bookShelfOptional.get(), HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//}
//
//
