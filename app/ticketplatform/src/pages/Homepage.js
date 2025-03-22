import React, { useContext, useEffect, useState } from 'react';
import homepageStyles from "../styles/Homepage.module.css";
import HotEventCard from '../components/HotEventCard';

import { ethers } from 'ethers';
import { useContract } from '../hooks/contractHook';

function Homepage() {
    const [events, setEvents] = useState([]);
    const { contract } = useContract();

    const searchClick = async () => {
        var i = 1;
        while ( true )
        {
            const event = await contract.getEventDetails(i);
            if (event.name === '') break;
            setEvents(prevEvents => [...prevEvents, event]);
            i++
            console.log(event);
        }
    };

    return (
        <>
        <div className={homepageStyles["search-event-container"]}>
            <input type="text" placeholder="Search for events" 
            className={homepageStyles["search-event"]}></input>
            <button className={homepageStyles["search-event-button"]} onClick={searchClick}>          
                Search
                </button>
        </div>

        <div className={homepageStyles["hot-events-container"]}>
            {events.map((event, i) =>
                    <HotEventCard name={event.name} date={events.date} description={event.description} />
            )}
        </div>
        </>
        
    );
}

export default Homepage;