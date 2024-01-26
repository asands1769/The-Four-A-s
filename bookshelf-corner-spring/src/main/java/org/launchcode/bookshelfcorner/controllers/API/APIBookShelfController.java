//package org.launchcode.bookshelfcorner.Controllers.API;
//
//import org.launchcode.bookshelfcorner.exceptions.BookShelfNotFoundException;
////import org.launchcode.bookshelfcorner.models.BookShelf;
//import org.launchcode.bookshelfcorner.repository.BookListRepository;
////import org.launchcode.bookshelfcorner.repository.BookShelfRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//import org.springframework.web.bind.annotation.*;
//
////import java.awt.print.Book;
//import java.util.List;
//@CrossOrigin  (origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/api/bookshelves")
//public class APIBookShelfController {
//    @Autowired
//    private BookShelfRepository bookshelfRepository;
//
//        @Autowired
//        private BookListRepository bookListRepository;
//    @GetMapping
//    public List<BookShelf> getAllBook() {
//        return (List<BookShelf>) bookshelfRepository.findAll();
//    }
//
//    @PostMapping
//    public BookShelf createbookshelves(@RequestBody BookShelf bookShelf) {
//        return bookshelfRepository.save(bookShelf);
//    }
//
//    @GetMapping("/books/id")
//    public BookShelf getBookByID(@PathVariable int id) {
//        return bookshelfRepository.findById(id).orElseThrow(() -> new BookShelfNotFoundException(id));
//    }
//
//    @PutMapping("/{id}")
//    public BookShelf updateBook(@RequestBody BookShelf bookShelf, @PathVariable int id) {
//        return bookshelfRepository.findById(id)
//                .map(BookShelf1 -> {
//                    BookShelf1.setTitle(BookShelf1.getTitle());
//                    BookShelf1.setBookCategory(BookShelf1.getBookCategory());
//                    BookShelf1.setTagType(BookShelf1.getTagType());
//                    return bookshelfRepository.save(bookShelf);
//                }).orElseThrow(() -> new BookShelfNotFoundException(id));
//    }
//
//    @DeleteMapping("/{id}")
//    public String deleteBookshelf(@PathVariable int id) {
//        if (!bookshelfRepository.existsById(id)) {
//            throw new BookShelfNotFoundException(id);
//        }
//        bookshelfRepository.deleteById(id);
//        return "Bookshelf with id " + id + " has been deleted successfully.";
//    }
//}

//@CrossOrigin  (origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/api/bookshelves")
//public class APIBookShelfController {
//
//    @Autowired
//    private BookShelfRepository bookShelfRepository;  // Assuming you have a service class for BookShelf
//
//    @GetMapping
//    List<BookShelf> getAllbookshelves() {
//        return (List<BookShelf>) bookShelfRepository.findAll();
//    }
//
//    @GetMapping("/{id}")
//    public BookShelf getbookshelvesById(@PathVariable int id) {
//        return bookShelfRepository.findById(id).orElseThrow(() -> new BookShelfNotFoundException(id));
//    }
//
//
//    @PostMapping
//    public BookShelf addBookshelf(@RequestBody BookShelf bookShelf) {
//        // Add logic to save the new bookshelf
//        return bookShelfRepository.save(bookShelf);
//    }
//
//    @PutMapping("/{id}")
//    public BookShelf updateBookShelf(@RequestBody BookShelf bookShelf, @PathVariable int id) {
//        return bookShelfRepository.findById(id)
//                .map(BookShelf1 -> {
//                    BookShelf1.setTitle(bookShelf.getTitle());
//                    BookShelf1.setBookCategory(bookShelf.getBookCategory());
////                    BookShelf1.setTagType(bookShelf.getTagType());
//                    BookShelf1.setAuthor(bookShelf.getAuthor());
//                    BookShelf1.setYear(bookShelf.getYear());
//                    return bookShelfRepository.save(BookShelf1);
//                }).orElseThrow(() -> new BookShelfNotFoundException(id));
//    }
//
//    @DeleteMapping("/{id}")
//    public  String deleteBookShelf(@PathVariable int id){
//        if(!bookShelfRepository.existsById(id)){
//            throw new BookShelfNotFoundException(id);
//        }
//        bookShelfRepository.deleteById(id);
//        return  "Bookshelf with id "+id+" has been deleted success.";
//    }
//}

//@CrossOrigin  (origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/api")
//public class APIBookShelfController {
//    @Autowired
//    private BookShelfRepository bookshelfRepository;
//    @Autowired
//    private BookListRepository bookListRepository;
//    @GetMapping
//    public List<Book> getAllBook() {
//        return bookRepository.findAll();
//    }
//
//    @PostMapping("/book/create")
//    public BookShelf addBook (@RequestBody BookShelf bookShelf) {
//        return bookshelfRepository.save(bookShelf);
//    }
//    @GetMapping("/books/id")
//    public  BookShelf getBookByID(@PathVariable int id) {
//        return bookshelfRepository.findById(id).orElseThrow(() -> new BookShelfNotFoundException(id));
//    }
//    @PutMapping("/{id}")
//    public BookShelf updateBook(@RequestBody BookShelf bookShelf, @PathVariable int id) {
//        return bookshelfRepository.findById(id)
//                .map(BookShelf1 -> {
//                    BookShelf1.setBook(BookShelf1.getBook());
//                    BookShelf1.setBookCategory(BookShelf1.getBookCategory());
//                    BookShelf1.setTagType(BookShelf1.getTagType());
//                    return bookshelfRepository.save(bookShelf);
//                }).orElseThrow(() -> new BookShelfNotFoundException(id));
//    }
//
//    @DeleteMapping("/{id}")
//    public String deleteBookshelf(@PathVariable int id) {
//        if (!bookshelfRepository.existsById(id)) {
//            throw new BookShelfNotFoundException(id);
//        }
//        bookshelfRepository.deleteById(id);
//        return "Bookshelf with id " + id + " has been deleted successfully.";
//    }
//
//
//
//
//}

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
