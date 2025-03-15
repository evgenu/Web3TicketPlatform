import React from 'react';
import homepageStyles from "../styles/Homepage.module.css";
import HotEventCard from '../components/HotEventCard';


function Homepage(){
    return (
        <>
        <div className={homepageStyles["search-event-container"]}>
            <input type="text" placeholder="Search for events" 
            className={homepageStyles["search-event"]}></input>
            <button className={homepageStyles["search-event-button"]}>          
                Search
                </button>
        </div>

        <div className="hot-event-container">
            <HotEventCard></HotEventCard>
        </div>
        </>
        
    );
}

export default Homepage;