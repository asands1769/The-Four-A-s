import jakarta.persistence.*;
import org.launchcode.bookshelfcorner.models.User;

import java.awt.print.Book;
import java.util.List;

@Entity
public class Bookshelf {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id") // Assuming there's a "user_id" column in the bookshelf table
    private User user;

    @ManyToMany
    @JoinTable(
            name = "bookshelf_books",
            joinColumns = @JoinColumn(name = "bookshelf_id"),
            inverseJoinColumns = @JoinColumn(name = "book_id")
    )
    private List<Book> books;

    // Constructors, getters, and setters

    public Bookshelf(Long id) {
        // Default constructor needed by JPA
        this.id = id;
    }

    public Bookshelf(User user, List<Book> books) {
        this.user = user;
        this.books = books;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }
// Other constructors, getters, and setters
}
