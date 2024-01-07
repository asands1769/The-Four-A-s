package org.launchcode.bookshelfcorner.controllers;

import org.launchcode.bookshelfcorner.models.Calendar;
import org.launchcode.bookshelfcorner.repository.CalendarRepository;


public class CalendarController {
    private Calendar calendar;
    private CalendarRepository calendarRepository;

    public CalendarController(Calendar calendar, CalendarRepository calendarRepository) {
        this.calendar = calendar;
        this.calendarRepository = calendarRepository;
    }
}
