package org.launchcode.bookshelfcorner.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Genre extends AbstractEntity {

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;

    @NotNull
    private String genreName;

    public Genre() {

    }

    public Genre(String aGenreName) {
        super();
        this.genreName = aGenreName;
    }

    public String getGenreName() {
        return genreName;
    }

    public void setGenreName(String genreName) {
        this.genreName = genreName;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) { this.user = user;
    }

    @Override
    public String toString() {
        return genreName;
    }
}
