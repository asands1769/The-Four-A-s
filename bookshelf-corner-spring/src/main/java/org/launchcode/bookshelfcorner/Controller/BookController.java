package org.launchcode.bookshelfcorner.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BookController {
      @GetMapping("/")
      public List<Book> getAllBooks() {
          return book.getAllBooks();
      }

