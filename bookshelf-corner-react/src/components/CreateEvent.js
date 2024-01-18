import React from "react";
import { useSession, useSupabaseClient, useSessionContext } from '@supabase/auth-helpers-react'
import DateTimePicker from "react-datetime-picker";
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import { useState } from 'react';

function CreateEvent() {
    const [ eventStartDateTime, setEventStartDate ] = useState(new Date());
    const [ eventEndDateTime, setEventEndDate ] = useState(new Date());
    const [ eventName, setEventName ] = useState("");
    const [ eventDescription, setEventDescription ] = useState("");
    const [ eventLocation, setEventLocation ] = useState("");

    const session = useSession(); //user/ when session exist, there is a User
    const supabase = useSupabaseClient(); // talk to supabase
    const { isLoading } = useSessionContext();

    if(isLoading) {
        return <></>
    }
     
    async function googleSignIn() {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                scopes: 'https://www.googleapis.com/auth/calendar'
            }
        });
        if(error) {
            alert("Error logging into Google provider with Supabase");
            console.log(error);
        }
    }

    async function signOut() {
        await supabase.auth.signOut();
    }

    async function saveCalendarEvent() {
        
        console.log("Creating Event");
         const event = {
            'eventName': eventName,
            'eventDescription': eventDescription,
            'eventLocation': eventLocation,
            'eventStartDateTime': eventStartDateTime,
               // 'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
            
            'eventEndDateTime': eventEndDateTime
               // 'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
        
         }

        console.log(event);
        
       /* await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events", {
            method: "POST",
            headers: {
                'Authorization':'Bearer ' + session.provider_token
            },
            body: JSON.stringify(event)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);
            alert("Event created, check your Google Calendar!");
        }); */

        await fetch("http://localhost:8080/createEvent", {
            method: "POST",
            headers: {
                "Content-Type": "text/plain",
              },
            body: JSON.stringify(event)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);
            alert("Event created, checkout the events page!");
        });
    }
   

    console.log(session);
    console.log(eventStartDateTime);
    console.log(eventEndDateTime);
    console.log(eventName);
    console.log(eventDescription);
    console.log(eventLocation);

    return(
        <div className="createEvent">
            <div style={{width: "400px", margin: "30px auto", textAlign: "center"}}>
                {session ?
                <>
                    <h2>Hello {session.user.email}</h2>
                    <p>Event Name</p>
                    <input type="text" onChange={(e) => setEventName(e.target.value)} />
                    <p></p>
                    <p>Event Description</p>
                    <input type="text" onChange={(e) => setEventDescription(e.target.value)} />
                    <p></p>
                    <p>Event Location</p>
                    <input type="text" onChange={(e) => setEventLocation(e.target.value)} />
                    <p></p>
                    <p>Event Start Date </p>
                    <DateTimePicker onChange={setEventStartDate} value={eventStartDateTime} />
                    <p></p>
                    <p>Event End Date </p>
                    <DateTimePicker onChange={setEventEndDate} value={eventEndDateTime} />
                    <p></p>
                    <hr />
                    <button onClick={() => saveCalendarEvent()}>Create Event</button>
                    <p></p>
                    <button onClick={() => signOut()}>Sign Out</button>
                </>
                :
                <>
                    <button onClick={() => googleSignIn()}>Sign In With Google</button>
                </>
                }
            </div>
        </div>
    );

}

export default CreateEvent;