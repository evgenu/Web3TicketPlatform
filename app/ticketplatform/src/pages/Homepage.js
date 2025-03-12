import React from 'react';
import Navbar from '../components/Navbar';
import "../styles/Homepage.css";


function Homepage(){
    return (
        <>
        <div className="search-event-container">
            <input type="text" placeholder="Search for events" className="search-event"></input>
            <button className="search-event-button">Search</button>
        </div>
        </>
        
    );
}

export default Homepage;