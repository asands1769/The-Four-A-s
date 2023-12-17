package org.launchcode.bookshelfcorner.models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Entity
public class Event extends AbstractEntity{

    @NotNull
    private String name;

    @NotNull
    private String description;

    @NotNull
    private LocalDateTime date_time;

    @NotNull
    private ArrayList attendees;

    public Event() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getDate_time() {
        return date_time;
    }

    public void setDate_time(LocalDateTime date_time) {
        this.date_time = date_time;
    }

    public ArrayList getAttendees() {
        return attendees;
    }

    public void setAttendees(ArrayList attendees) {
        this.attendees = attendees;
    }
}
