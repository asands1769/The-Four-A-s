package org.launchcode.bookshelfcorner.models;

import jakarta.persistence.Entity;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDate;
import java.time.LocalTime;

@Entity
public class Calendar extends AbstractEntity {

    @NotNull
    private LocalDate date;

    @NotNull
    private LocalTime time;

    @NotNull
    private Event event;

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public LocalTime getTime() {
        return time;
    }

    public void setTime(LocalTime time) {
        this.time = time;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }
}
