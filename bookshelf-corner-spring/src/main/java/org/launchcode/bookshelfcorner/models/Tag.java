package org.launchcode.bookshelfcorner.models;


import jakarta.persistence.*;

@Entity
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "tag_name", nullable = false)
    private String name;
    @Column(name = "tag_type", nullable = false)
    private String type; // Attribute to represent the type of tag (e.g., "Must Read", "Timeless")

    // Constructors, getters, and setters

    public Tag() {
        // Default constructor
    }

    public Tag(String name, String type) {
        this.name = name;
        this.type = type;
    }

    // Getter and Setter for name
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // Getter and Setter for type
    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}
