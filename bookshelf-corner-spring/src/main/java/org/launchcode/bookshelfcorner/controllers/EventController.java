package org.launchcode.bookshelfcorner.controllers;

import org.launchcode.bookshelfcorner.models.Event;
import org.launchcode.bookshelfcorner.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins= "http://localhost:3000")
@RestController
public class EventController {


    @Autowired
    private EventRepository eventRepository;

   /* public EventController(Event event, EventRepository eventRepository) {
        this.event = event;
        this.eventRepository = eventRepository;
    }*/

    @PostMapping("/createEvent")

    public String createEvent (@RequestBody Event event) {
        Event newEvent= new Event(event.getEventName(), event.getEventDescription(), event.getEventLocation(), event.getEventStartDateTime(), event.getEventEndDateTime());
        eventRepository.save(newEvent);

        return "save";
    }

    @GetMapping(value = "/getEvent", produces = MediaType.APPLICATION_JSON_VALUE)

    public Iterable<Event> getEvent () {
        return eventRepository.findAll();
    }


   /* public boolean validateEventData(String eventName, String eventDescription, String eventLocation, LocalDateTime eventDateTime) {
        if (eventName == null || eventName.trim().isEmpty() || eventDateTime == null || eventLocation == null) {

            throw new Error("Invalid input.");
        }
        return true;
    }

    public void createEvent(Event event) {
        eventRepository.save(event);
    }

    public Iterable<Event> findAllEvents() {
        return eventRepository.findAll();
    }

   /* public Event getEventById() {
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
                .filter(event -> isEventMatchingCriteria(event, keyword, eventName, eventDescription, /* other parameters ))
                /*.collect(Collectors.toList());

        return filteredEvents;
    }*/



   // @GetMapping("/events")
    //@ResponseBody
    //public String renderEventsHomePage() {
     //  return "Host and add an Event!";


}
