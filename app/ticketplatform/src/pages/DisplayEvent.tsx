import { useLocation } from "react-router-dom";
import { useContract } from "../hooks/contractHook";
import { useEffect, useState } from "react";
import eventStyles from "../styles/Event.module.css";
import { ethers } from "ethers";

interface Event {
    name: string;
    description: string;
    date: number;
    organizer: string;
    ticketCount: number;
    ticketSold: number;
    ticketPrice: number;
}

const DisplayEvent = () => {

    const location = useLocation();
    const { id } = location.state;
    const contract = useContract();
    const [event, setEvent] = useState<Event | null>(null);

    useEffect(() => {

        const loadEvents = async () => {
            if (!contract?.contract) {
                alert('Contract not loaded');
                return;
            };
            const eventDetails = await contract.contract.getEventDetails(id) as Event;
            setEvent(eventDetails);
        };

        loadEvents();

    }, [contract, id])

    const buyTicket = async () => {
        if (!contract?.contract) {
            alert('Contract not loaded');
            return;
        };
        const tx = await contract.contract.buyTicket(id, { value: event?.ticketPrice }); {
            
        };
    }
    

    return (
        <>
            {
                !event ? <h1>Loading...</h1> : (
                    <>
                        <div className={eventStyles["event-container"]}>

                        <h1 className={eventStyles["event-name"]}>Event name: {event.name}</h1>
                        <p className={eventStyles["event-description"]}>Event description</p>
                        <p className={eventStyles["event-text"]}>{event.description}</p>
                        <p className={eventStyles["event-date"]}>Event date: {new Date(Number(event.date) * 1000).toLocaleDateString()}</p>

                        <button className={eventStyles["event-pay-button"]} onClick={buyTicket}>Pay with Wei {ethers.formatEther(event.ticketPrice)}</button>

                        </div>

                    </>
                )
            }
        </>
    );
}

export default DisplayEvent;