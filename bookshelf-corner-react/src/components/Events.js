import React from 'react';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

function Events() {

    return(
        <div>
            <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
            initialView='dayGridMonth'
            headerToolbar={{
                start: 'today prev,next' , 
                center: 'title',
                end: 'dayGridMonth,timeGridWeek,timeGridDay' 
            }}
            height="90vh"
            />
            
        </div>
        
        
    )
}

export default Events;