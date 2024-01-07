package org.launchcode.bookshelfcorner.models;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Event extends AbstractEntity {

    @ManyToOne
    private Calendar calendar;

    @NotNull
    private String eventName;

    @NotNull
    private String eventDescription;

    @NotNull
    private String eventLocation;

  /*  @NotNull
    private LocalDateTime eventDateTime;*/

    @NotNull
    @ManyToMany
    private List<User> eventParticipants = new ArrayList<>();


    public Event() {
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getEventDescription() {
        return eventDescription;
    }

    public void setEventDescription(String eventDescription) {
        this.eventDescription = eventDescription;
    }

    public String getEventLocation() {
        return eventLocation;
    }

    public void setEventLocation(String eventLocation) {
        this.eventLocation = eventLocation;
    }

    /*public LocalDateTime getEventDateTime() {
        return eventDateTime;
    }

    public void setEventDateTime(LocalDateTime eventDateTime) {
        this.eventDateTime = eventDateTime;
    }*/

    public List<User> getEventParticipants() {
        return eventParticipants;
    }

    public void setEventParticipants(List<User> eventParticipants) {
        this.eventParticipants = eventParticipants;
    }

    @Override
    public String toString() {
        return "Event{" +
                "eventId=" + /*eventId*/
                ", eventName='" + eventName + '\'' +
                ", eventDescription='" + eventDescription + '\'' +
                ", eventLocation='" + eventLocation + '\'' +
                ", eventParticipants='" + eventParticipants + '\'' +
                ", eventDateTime=" + /*eventDateTime +*/
                '}';
    }
}
