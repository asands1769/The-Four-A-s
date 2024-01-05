package org.launchcode.bookshelfcorner.models.data;

import org.launchcode.bookshelfcorner.models.Event;

import java.util.List;

public interface EventRepository {
    void saveEvent(Event event);

    List<Event> getAllEvents();

    void updateEvent(Event event);
}
