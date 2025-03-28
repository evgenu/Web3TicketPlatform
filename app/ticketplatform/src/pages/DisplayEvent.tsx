import { useParams } from "react-router-dom";
import { useContract } from "../hooks/contractHook";
import { useEffect, useState } from "react";
import displayEventStyles from "../styles/DisplayEvent.module.css";
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
    const { id } = useParams<{ id: string }>();
    const contract = useContract();
    const [event, setEvent] = useState<Event | null>(null);

    useEffect(() => {
        const loadEvents = async () => {
            if (!contract?.contract) {
                alert('Contract not loaded');
                return;
            };
            const eventDetails = await contract.contract.getEventDetails(Number(id)) as Event;
            setEvent(eventDetails);
        };

        loadEvents();

    }, [contract, id])

    const buyTicket = async () => {
        if (!contract?.contract) {
            alert('Contract not loaded');
            return;
        };
        const tx = await contract.contract.buyTicket(Number(id), { value: event?.ticketPrice }); {
            console.log(tx);
        };
    }

    return (
        <>
            {
                !event ? <h1>Loading...</h1> : (
                    <>
                        <div className={displayEventStyles["event-container"]}>

                            <h1 className={displayEventStyles["event-name"]}>Event name: {event.name}</h1>
                            <p className={displayEventStyles["event-description"]}>Event description</p>
                            <p className={displayEventStyles["event-text"]}>{event.description}</p>
                            <p className={displayEventStyles["event-date"]}>Event date: {new Date(Number(event.date) * 1000).toLocaleDateString()}</p>

                            <button className={displayEventStyles["event-pay-button"]} onClick={buyTicket}>Pay with Wei {ethers.formatEther(event.ticketPrice)}</button>

                        </div>

                    </>
                )
            }

        </>
    );

}

export default DisplayEvent;