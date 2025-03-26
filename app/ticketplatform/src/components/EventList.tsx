import { useEffect, useState } from "react";
import { useContract } from "../hooks/contractHook";
import HotEventCard from "./HotEventCard";
import homepageStyles from "../styles/Homepage.module.css";


interface Event {
    name: string;
    description: string;
    date: number;
    organizer: string;
    ticketCount: number;
    ticketSold: number;
    ticketPrice: number;
}


const EventList = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const { contract } = useContract() || {};

    const loadEvents = async () => {
        var i = 1;
        setEvents([]);
        while (true) {
            const event = contract ? await contract.getEventDetails(i) : null;
            if (!event) break;
            if (event.name === '') break;
            setEvents(prevEvents => [...prevEvents, event]);
            i++;
        }
    };

    useEffect(() => {
        loadEvents();
    }, [contract]);

    return (
        <>
            <div className={homepageStyles["hot-events-container"]}>
                {events.map((event, i) =>
                    <HotEventCard id={i + 1} name={event.name} date={event.date.toString()} description={event.description} />
                )}
            </div>
        </>

    );
}

export default EventList;