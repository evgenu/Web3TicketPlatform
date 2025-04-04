import { useEffect, useState } from "react";
import { useContract } from "../hooks/contractHook";
import HotEventCard from "./HotEventCard";
import eventListStyles from "../styles/EventList.module.css";
import { useEventList } from "../hooks/eventListHook";
import { toast } from "react-toastify";

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
    const eventList = useEventList();
    
    const { contract } = useContract() || {};

    const loadEvents = async () => {
        if (eventList.eventList.length > 0) return;
        let i = 1;
        const upcomingEvents: Event[] = [];

        try {
            while (true) {
                const event = contract ? await contract.getEventDetails(i) : null;
                if (!event || event.name === '') break;
                upcomingEvents.push(event);
                i++;
            }

            eventList.setEventList(upcomingEvents);
        } catch (error) {
            toast.error(error as string, { toastId: "failed-loading-events" });
        }
    };

    useEffect(() => {
        loadEvents();
    }, [contract]);

    return (
        <>
            <div className={eventListStyles["hot-events-container"]}>
                {eventList.eventList.map((event, i) => ( event.date > Math.floor(Date.now() / 1000) && event.ticketSold < event.ticketCount) && (
                    <HotEventCard
                        key={i}
                        id={i + 1}
                        name={event.name}
                        date={event.date}
                        description={event.description}
                    />
                ))}
            </div>
        </>
    );
};

export default EventList;