package org.launchcode.bookshelfcorner.controllers;

import org.launchcode.bookshelfcorner.models.Calendar;
import org.launchcode.bookshelfcorner.models.Event;
import org.launchcode.bookshelfcorner.models.data.CalendarRespository;
import org.launchcode.bookshelfcorner.models.data.EventView;

public class CalendarController {
    private Calendar calendar;
    private CalendarRespository calendarRespository;

    public CalendarController(Calendar calendar, CalendarRespository calendarRespository) {
        this.calendar = calendar;
        this.calendarRespository = calendarRespository;
    }
}
