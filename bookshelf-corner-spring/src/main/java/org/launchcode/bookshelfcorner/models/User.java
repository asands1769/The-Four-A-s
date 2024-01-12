package org.launchcode.bookshelfcorner.models;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotNull;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.List;

@Entity
public class User extends AbstractEntity {

    private static final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    @ManyToMany(mappedBy = "eventParticipants")
    private List<Event> events= new ArrayList<>();

    @OneToMany(mappedBy = "createdBy")
    private List<Review> reviews= new ArrayList<>();

    @NotNull
    private String username;

    @NotNull
    private String email;

    @NotNull
    private String pwHash;

//    @ManyToMany
//    private List<Book> booksToShare = new ArrayList<>();

    public User() {}

    public User(String aUsername, String anEmail, String password) {
        super();
        this.username = aUsername;
        this.pwHash = encoder.encode(password);
        this.email = anEmail;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() { return email; }

    public void setUsername(String username) { this.username = username; }

    public void setEmail(String email) { this.email = email; }

    public void setPwHash (String password) { this.pwHash = encoder.encode(password); }

//    public List<Book> getBooksToShare() { return booksToShare; }
//
//
//    public void setBooksToShare(List<Book> booksToShare) { this.booksToShare = booksToShare; }

    //Do we need another method to update booksToShare list?
    //Should this be another class by itself?

    @Override
    public String toString() {
        return username;
    }


    public boolean isMatchingPassword(String password) {
        return encoder.matches(password, pwHash);
    }
}

