import React from "react";
import { useState } from 'react';

function Reviews() {
   const [review, setReview] = useState({textarea:""});
    

    function submitReview() {
        /*ajax('/reviews', 'post', user.jwt, review).then(data => {
            console.log(data);
        }*/
    
     }
    


    function updateReview(value) {
        const reviewCopy = {...review}
        reviewCopy.text = value;
        setReview = reviewCopy;
    }

    return(
        <div className ="Review"
        style={{marginRight: "30px", textAlign: "right"}}>
            <textarea
            style={{ width: "50%", borderRadius: ".25em"}}
            onChange={(e) => updateReview(e.target.value)}>
            </textarea>
            <button onClick={() => submitReview()}>Post Review</button>

        </div>
    );
    
}

export default Reviews;