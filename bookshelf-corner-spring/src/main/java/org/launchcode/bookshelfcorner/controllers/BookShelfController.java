package org.launchcode.bookshelfcorner.Controllers;

import org.launchcode.bookshelfcorner.models.BookShelf;
import org.launchcode.bookshelfcorner.models.data.BookShelfRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bookshelves")
public class BookShelfController {

    @Autowired
    private BookShelfRepository bookshelfRepository;

    @GetMapping
    public List<BookShelf> getAllBookshelves() {
        return null;
    }

    @GetMapping("/{id}")
    public ResponseEntity<BookShelf> getBookshelfById(@PathVariable Long Id) {
        Optional<BookShelf> optionalBookshelf = bookshelfRepository.findById(Id);
        return optionalBookshelf.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<BookShelf> createBookshelf(@RequestBody BookShelf bookshelf) {
        BookShelf savedBookshelf = bookshelfRepository.save(bookshelf);
        return ResponseEntity.ok(savedBookshelf);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BookShelf> updateBookshelf(@PathVariable Long id, @RequestBody BookShelf updatedBookshelf) {
        Optional<BookShelf> optionalBookshelf = bookshelfRepository.findById(id);

        if (optionalBookshelf.isPresent()) {
            BookShelf existingBookshelf = optionalBookshelf.get();
            // Update bookshelf properties based on updatedBookshelf
            // ...

            // Save the updated bookshelf
            bookshelfRepository.save(existingBookshelf);
            return ResponseEntity.ok(existingBookshelf);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBookshelf(@PathVariable Long id) {
        bookshelfRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
