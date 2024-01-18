import React, {useState} from "react";
/*import { FaSearch } from "react-icons/fa";*/
// import ".SearchBar.css";

export const SearchBar = () => {
    const [input, setInput] = useState("")

    const handleSearch = async(e) => { 
        console.log(e);
        const searchInput = {searchInput: e};

        await fetch("http://localhost:8080/search/searchInput", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(searchInput)
        }).then((data) => {
            return data.json();
       //data returning from backened to front 
        }).then((data) => {
            console.log(data);
        });
    }

    return (
        <div className= "input-wrapper">
            <form>
            {/* <FaSearch id= "search-icon" /> */}
            <input placeholder="Type to search..." type= {"text"} onChange={(e) => handleSearch(e.target.value)} />
            <button type={"button"}>Submit</button>
            </form>
        </div>
    );
};