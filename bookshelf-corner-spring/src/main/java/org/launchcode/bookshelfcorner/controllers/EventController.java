package org.launchcode.bookshelfcorner.controllers;

import org.launchcode.bookshelfcorner.models.Event;
import org.launchcode.bookshelfcorner.models.data.EventRepository;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Controller

public class EventController {

    private Event event;
    private EventRepository eventRepository;

    public EventController(Event event, EventRepository eventRepository) {
        this.event = event;
        this.eventRepository = eventRepository;
    }

    public boolean validateEventData(String eventName, String eventDescription, String eventLocation, LocalDateTime eventDateTime) {
        if (eventName == null || eventName.trim().isEmpty() || eventDateTime == null || eventLocation == null) {

            throw new Error("Invalid input.");
        }
        return true;
    }
    public void createEvent(Event event) {
        eventRepository.saveEvent(event);
    }

    public List<Event> getAllEvents() {
        return eventRepository.getAllEvents();
    }

    public Event getEventById() {
        // Logic to retrieve an event by its ID from the system
    }
    public void updateEvent(Event event) {
        eventRepository.updateEvent(event);
    }

    public void deleteEvent(Event event) {
        // use event id?
    }

    public void rsvpToEvent(User user) {
        // Logic to add a user to the participant list of the event
    }

    public List<Event> searchEvents(String keyword, String eventName, String eventDescription, String eventLocation, LocalDateTime eventDateTime) {
        List<Event> allEvents = eventRepository.getAllEvents();

        // Apply filtering based on search criteria
        List<Event> filteredEvents = allEvents.stream()
                .filter(event -> isEventMatchingCriteria(event, keyword, eventName, eventDescription, /* other parameters */))
                .collect(Collectors.toList());

        return filteredEvents;
    }



    @GetMapping("/events")
    @ResponseBody
    public String renderEventsHomePage() {
       return "Host and add an Event!";
    }

}
