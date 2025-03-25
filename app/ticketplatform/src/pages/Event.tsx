import { useLocation } from "react-router-dom";
import { useContract } from "../hooks/contractHook";
import { useEffect, useState } from "react";
import { eventNames } from "process";
import eventStyles from "../styles/Event.module.css";

interface Event {
    name: string;
    description: string;
    date: number;
    organizer: string;
    ticketCount: number;
    ticketSold: number;
    ticketPrice: number;
}

const Event = () => {

    const location = useLocation();
    const { id } = location.state;
    const contract = useContract();
    const [event, setEvent] = useState<Event | null>(null);

    useEffect(() => {

        const loadEvents = async () => {
            if (!contract?.contract) return;
            const eventDetails = await contract.contract.getEventDetails(id) as Event;
            setEvent(eventDetails);
        };

        loadEvents();

    }, [contract, id])
    

    return (
        <>
            {
                !event ? <h1>Loading...</h1> : (
                    <>
                        <div className={eventStyles["event-container"]}>

                        <h1 className={eventStyles["event-name"]}>Event name: {event.name}</h1>
                        <p className={eventStyles["event-description"]}>Event description</p>
                        <p className={eventStyles["event-text"]}>{event.description}</p>
                        <p className={eventStyles["event-date"]}>Event date: {event.date}</p>

                        <button className={eventStyles["event-pay-button"]}>Pay with ETH {event.ticketPrice}</button>

                        </div>

                    </>
                )
            }
        </>
    );
}

export default Event;