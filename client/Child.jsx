import React from "react";
import { createRoot } from 'react-dom/client';

function Render() {

       return (
        <button 
        className='subscription'
        // When user clicks this, give the user the html page (On click will do a get request to the server)
        onClick={() => alert('Going to sign up for Energy Life Pakage! (Page Loading...)')}
        >
                (Meal Package) Energy Life
        </button>
    )
};

export default Render;