function RSVP() {
    return (

<form id="rsvpForm" action="/rsvp" method="post">
   
<h1>RSVP to Event</h1>

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
    )
}

export default RSVP;