import { useEffect, useState } from "react";
import { useContract } from "../hooks/contractHook";
import HotEventCard from "./HotEventCard";
import eventListStyles from "../styles/EventList.module.css";

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
        let i = 1;
        const currentTimestamp = Math.floor(Date.now() / 1000); // Current time in seconds
        const upcomingEvents: Event[] = [];

        while (true) {
            const event = contract ? await contract.getEventDetails(i) : null;
            if (!event || event.name === '') break;

            // Only add events with a future date
            if (event.date >= currentTimestamp) {
                upcomingEvents.push(event);
            }
            i++;
        }

        setEvents(upcomingEvents);
    };

    useEffect(() => {
        loadEvents();
    }, [contract]);

    return (
        <>
            <div className={eventListStyles["hot-events-container"]}>
                {events.map((event, i) => (
                    <HotEventCard
                        key={i}
                        id={i + 1}
                        name={event.name}
                        date={event.date.toString()}
                        description={event.description}
                    />
                ))}
            </div>
        </>
    );
};

export default EventList;