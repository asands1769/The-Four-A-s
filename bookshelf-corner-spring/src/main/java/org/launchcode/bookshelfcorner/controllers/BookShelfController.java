//package org.launchcode.bookshelfcorner.controllers;
//
////import org.launchcode.bookshelfcorner.models.Book;
//import org.launchcode.bookshelfcorner.models.Book;
//import org.launchcode.bookshelfcorner.models.BookShelf;
////import org.launchcode.bookshelfcorner.repositories.BookShelfRepository;
////import org.launchcode.bookshelfcorner.repositories.BookRepository;
//import org.launchcode.bookshelfcorner.repository.BookShelfRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@Controller
//@RequestMapping("/bookshelves")
//public class BookShelfController {
//
//    @Autowired
//    private BookShelfRepository bookShelfRepository;
////    private final BookRepository bookRepository;
//
//
//    public BookShelfController(BookShelfRepository bookShelfRepository) {
//        this.bookShelfRepository = bookShelfRepository;
////        this.bookRepository = bookRepository;
//    }
//
//    // Display all bookshelves
//    @GetMapping
//    public String listBookShelves(Model model) {
//        List<BookShelf> bookShelves = (List<BookShelf>) bookShelfRepository.findAll();
//        model.addAttribute("bookShelves", bookShelves);
//        return "bookshelves/list";
//    }
//
//    // Display details of a specific bookshelf
//    @GetMapping("/{id}")
//    public String viewBookShelf(@PathVariable Integer id, Model model) {
//        Optional<BookShelf> optionalBookShelf = bookShelfRepository.findById(id);
//        if (optionalBookShelf.isPresent()) {
//            BookShelf bookShelf = optionalBookShelf.get();
//            model.addAttribute("bookShelf", bookShelf);
//            return "bookshelves/view";
//        } else {
//            return "error/404"; // Handle 404 error, e.g., show a custom error page
//        }
//    }
//
//    // Display form to create a new bookshelf
//    @GetMapping("/create")
//    public String createBookShelfForm(Model model) {
//        model.addAttribute("bookShelf", new BookShelf());
//        return "bookshelves/create";
//    }
//
//    // Process form submission to create a new bookshelf
//    @PostMapping("/create")
//    public String createBookShelf(@ModelAttribute BookShelf bookShelf) {
//        bookShelfRepository.save(bookShelf);
//        return "redirect:/bookshelves";
//    }
//    @GetMapping("/{id}/addBook")
//    public String addBookToBookShelfForm(@PathVariable Integer id, Model model) {
//        Optional<BookShelf> optionalBookShelf = bookShelfRepository.findById(id);
//        return optionalBookShelf.map(bookShelf -> {
//            model.addAttribute("bookShelf", bookShelf);
////            model.addAttribute("book", new Book());
//            return "bookshelves/addBook";
//        }).orElse("error/404");
//    }
//
//    @PostMapping("/{id}/addBook")
//    public String addBookToBookShelf(@PathVariable Integer id, @ModelAttribute Book book) {
//        Optional<BookShelf> optionalBookShelf = bookShelfRepository.findById(id);
//        return optionalBookShelf.map(bookShelf -> {
//            bookShelf.addBook(book);
//            bookShelfRepository.save(bookShelf);
//            return "redirect:/bookshelves/" + id;
//        }).orElse("error/404");
//    }

    // Display form to add a book to a bookshelf
//    @GetMapping("/{id}/addBook")
//    public String addBookToBookShelfForm(@PathVariable Integer id, Model model) {
//        Optional<BookShelf> optionalBookShelf = bookShelfRepository.findById(id);
//        if (optionalBookShelf.isPresent()) {
//            BookShelf bookShelf = optionalBookShelf.get();
//            model.addAttribute("bookShelf", bookShelf);
//            //model.addAttribute("book", new Book());
//            return "bookshelves/addBook";
//        } else {
//            return "error/404"; // Handle 404 error
//        }
//    }
//
//    // Process form submission to add a book to a bookshelf
//    @PostMapping("/{id}/addBook")
//    public String addBookToBookShelf(@PathVariable Integer id, @ModelAttribute Book book) {
//       Optional<BookShelf> optionalBookShelf = bookShelfRepository.findById(id);
//       if (optionalBookShelf.isPresent()) {
//            BookShelf bookShelf = optionalBookShelf.get();
//            bookShelf.addbook(book);
//            bookShelfRepository.save(bookShelf);
//            return "redirect:/bookshelves/" + id;
//        } else {
//            return "error/404"; // Handle 404 error
//        }
//   }
//}

