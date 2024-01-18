import React, {useEffect, useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

import * as boostrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


function Events() {
    const [newEvent, setNewEvent] = useState([]);
    
    useEffect (() => {
        fetch('http://localhost:8080/getEvent', {
            method: "GET",
            headers: {
                "Content-Type": "text/plain",
              },
        })
        .then(response => response.json())
        .then(data => {setNewEvent(data)})
        console.log(newEvent);
    }, [])


    return(
        <div>
            {/* <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            initialView='dayGridMonth'
            headerToolbar={{
                start: 'today prev,next' , 
                center: 'title',
                end: 'dayGridMonth,timeGridWeek,timeGridDay' 
            }}
            height= {"90vh"}
           newEvent={newEvent}
            />
             */}
             {/* {newEvent.map((event) => (
                <div>
                    {event.eventName}
                </div>
             ))}
             {newEvent} */}
        </div>
        
        
    )
}

export default Events;