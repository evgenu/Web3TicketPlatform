import React, { use, useContext, useEffect, useState } from 'react';
import homepageStyles from "../styles/Homepage.module.css";
import HotEventCard from '../components/HotEventCard';

import { ethers } from 'ethers';
import { useContract } from '../hooks/contractHook';

interface Event {
    name: string;
    description: string;
    date: number;
    organizer: string;
    ticketCount: number;
    ticketSold: number;
    ticketPrice: number;
}

function Homepage() {
    const [events, setEvents] = useState<Event[]>([]);
    const { contract } = useContract() || {};

    const loadEvents = async () => {
        var i = 1;
        while (true) {
            const event = contract ? await contract.getEventDetails(i) : null;
            if (!event) break;
            if (event.name === '') break;
            setEvents(prevEvents => [...prevEvents, event]);
            i++
            // console.log(event);
        }
    };

    useEffect(() => {
        loadEvents();
    }, [contract]);

    return (
        <>
            <div className={homepageStyles["search-event-container"]}>
                <input type="text" placeholder="Search for events"
                    className={homepageStyles["search-event"]}></input>
                <button className={homepageStyles["search-event-button"]} onClick={loadEvents}>
                    Search
                </button>
            </div>

            <div className={homepageStyles["hot-events-container"]}>
                {events.map((event, i) =>
                    <HotEventCard id={i + 1} name={event.name} date={event.date.toString()} description={event.description} />
                )}
            </div>
        </>

    );
}

export default Homepage;