package org.launchcode.bookshelfcorner.repository;

import org.launchcode.bookshelfcorner.models.Calendar;
import org.springframework.data.repository.CrudRepository;

public interface CalendarRepository extends CrudRepository<Calendar, Integer> {
}
