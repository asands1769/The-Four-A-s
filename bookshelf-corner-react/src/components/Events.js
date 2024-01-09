import React from 'react';

function Events() {

    return(
        <div>
<h1>Create Event</h1>

<form id="createEventForm" action="/create-event" method="post">

    <label for="eventName">Event Name:</label>
    <input type="text" id="eventName" name="eventName" required/>

    
    <label for="eventDescription">Event Description:</label>
    <textarea id="eventDescription" name="eventDescription" rows="4" required></textarea>

    
    <label for="eventDateTime">Event Date and Time:</label>
    <input type="datetime-local" id="eventDateTime" name="eventDateTime" required/>

    <label for="eventLocation">Event Location:</label>
    <textarea id="eventLocation" name="eventLocation" rows="2" required></textarea>



   
    <button type="submit">Create Event</button>
</form>

<h1>RSVP to Event</h1>

<form id="rsvpForm" action="/rsvp" method="post">
   
    <label for="userName">Your Name:</label>
    <input type="text" id="userName" name="userName" required/>

    <label for="userEmail">Your Email:</label>
    <input type="email" id="userEmail" name="userEmail" required/>

    
    <label for="rsvpStatus">RSVP Status:</label>
    <select id="rsvpStatus" name="rsvpStatus" required>
        <option value="attending">Attending</option>
        <option value="not_attending">Not Attending</option>
    </select>

    

  
    <input type="hidden" id="eventId" name="eventId" value="123"/> 

    
    <button type="submit">Submit RSVP</button>
</form>

</div>
);
}

export default Events;