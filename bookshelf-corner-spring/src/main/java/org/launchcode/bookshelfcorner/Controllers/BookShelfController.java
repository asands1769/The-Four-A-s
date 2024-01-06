import org.launchcode.bookshelfcorner.Controllers.Bookshelf;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookshelves")
public class BookshelfController {

    @Autowired
    private BookshelfService bookshelfService;

    // Get all bookshelves
    @GetMapping
    public List<Bookshelf> getAllBookshelves() {
        return bookshelfService.getAllBookshelves();
    }

    // Get a specific bookshelf by ID
    @GetMapping("/{id}")
    public ResponseEntity<Bookshelf> getBookshelfById(@PathVariable Long id) {
        Bookshelf bookshelf = bookshelfService.getBookshelfById(id);
        return bookshelf != null ? ResponseEntity.ok(bookshelf) : ResponseEntity.notFound().build();
    }

    // Create a new bookshelf
    @PostMapping
    public ResponseEntity<Bookshelf> createBookshelf(@RequestBody Bookshelf bookshelf) {
        Bookshelf savedBookshelf = bookshelfService.createBookshelf(bookshelf);
        return ResponseEntity.ok(savedBookshelf);
    }

    // Update an existing bookshelf
    @PutMapping("/{id}")
    public ResponseEntity<Bookshelf> updateBookshelf(@PathVariable Long id, @RequestBody Bookshelf updatedBookshelf) {
        Bookshelf bookshelf = bookshelfService.updateBookshelf(id, updatedBookshelf);
        return bookshelf != null ? ResponseEntity.ok(bookshelf) : ResponseEntity.notFound().build();
    }

    // Delete a bookshelf by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBookshelf(@PathVariable Long id) {
        bookshelfService.deleteBookshelf(id);
        return ResponseEntity.noContent().build();
    }

    // Add a book to a bookshelf
    @PostMapping("/{bookshelfId}/addBook/{bookId}")
    public ResponseEntity<Bookshelf> addBookToBookshelf(@PathVariable Long bookshelfId, @PathVariable Long bookId) {
        Bookshelf updatedBookshelf = bookshelfService.addBookToBookshelf(bookshelfId, bookId);
        return ResponseEntity.ok(updatedBookshelf);
    }

    // Remove a book from a bookshelf
    @PostMapping("/{bookshelfId}/removeBook/{bookId}")
    public ResponseEntity<Bookshelf> removeBookFromBookshelf(@PathVariable Long bookshelfId, @PathVariable Long bookId) {
        Bookshelf updatedBookshelf = bookshelfService.removeBookFromBookshelf(bookshelfId, bookId);
        return ResponseEntity.ok(updatedBookshelf);
    }

    // Other controller methods for managing community wishlists
}
