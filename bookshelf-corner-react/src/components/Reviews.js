import React from "react";
import { useState } from 'react';
import { SearchBar } from "./SearchBar";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import 'react-calendar/dist/Calendar.css';


function Reviews() {
    const [createdBy, setCreatedBy] = useState("");
    const [bookTitle, setBookTitle] = useState("");
    const createdDate= new Date();
    const [reviewText, setReviewText] = useState({textarea:""});
    
    const review = {
        'createdBy':createdBy,
        'bookTitle':bookTitle,
        'createdDate':createdDate,
        'text': reviewText
    }

    const submitReview = async(review) => { 
        console.log(review);
        
    
        await fetch("http://localhost:8080/submitReview", {
            method: "POST",
            headers: {
            "Content-Type": "text/plain",
            },
            body: JSON.stringify(review)
        }).then((data) => {
            return data.json();
       //data returning from backened to front 
        }).then((data) => {
            console.log(data);
        });
    
     }
    
console.log(createdBy);
console.log(bookTitle);
console.log(createdDate);
console.log(reviewText);

    // function updateReview(value) {
    //     const reviewtext = {...review}
    //     reviewtext.text = value;
    //     setReviewText = reviewtext;
    // }

    return(
        <div>
            <SearchBar />
        <div className ="Review"
        style={{width: "900px", marginRight: "30px", textAlign: "right"}}>
            <p>Name</p>
            <input placeholder="Name" type= {"text"} onChange={(e) => setCreatedBy(e.target.value)} />
            <p>Book Title</p>
            <input placeholder="Book Title" type= {"text"} onChange={(e) => setBookTitle(e.target.value)} />
            {/* <p>Date</p>
            //<DatePicker onChange={setCreatedDate} value={createdDate}/> */}
            <p></p>
            <textarea
            style={{ width: "50%", borderRadius: ".25em"}}
            onChange={(e) => setReviewText(e.target.value)}>
            </textarea>
            <button onClick={() => submitReview()}>Post Review</button>

        </div>
        </div>
    );
    


}

export default Reviews;