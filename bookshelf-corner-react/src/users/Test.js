import React from "react";
import { useNavigate } from "react-router-dom";


 function Test() {

    let navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        return navigate("/users/profile");

    }
    return (
        <div>
            <h1>Test</h1>
            <form onSubmit={onSubmit}>
            <input type="submit" name="submit" value="submit" />
            </form>
        </div>
    );
}
export default Test;