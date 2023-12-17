package org.launchcode.bookshelfcorner.controllers;

import org.launchcode.bookshelfcorner.models.Event;
import org.launchcode.bookshelfcorner.models.data.EventView;

public class EventController {

    private Event event;
    private EventView eventView;

    public EventController(Event event, EventView eventView) {
        this.event = event;
        this.eventView = eventView;
    }
}
