package org.launchcode.bookshelfcorner.Controllers;

import org.launchcode.bookshelfcorner.models.BookShelf;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class BookShelfController {
    @GetMapping("/")
    public List<BookShelf> getAllBooks() {

        return null;
    }

}
