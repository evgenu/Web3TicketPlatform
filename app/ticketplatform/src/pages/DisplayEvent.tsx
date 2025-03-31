import { useParams } from "react-router-dom";
import { useContract } from "../hooks/contractHook";
import { useEffect, useState } from "react";
import displayEventStyles from "../styles/DisplayEvent.module.css";
import { ethers } from "ethers";
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

const DisplayEvent = () => {
    const { id } = useParams<{ id: string }>();
    const contract = useContract();
    const [event, setEvent] = useState<Event | null>(null);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                if (!contract?.contract) {
                    toast.error('Contract not loaded', { toastId: "contract-not-loaded" });
                    return;
                }

                const eventDetails = await contract.contract.getEventDetails(Number(id)) as Event;
                setEvent(eventDetails);
            } catch (error) {
                console.error("Error loading event details:", error);
                toast.error("Failed to load event details. Please try again later.", { toastId: "failed-loading-events" });
            }
        };

        loadEvents();

    }, [contract, id])

    const buyTicket = async () => {
        try {
            if (!contract?.contract) {
                toast.error('Contract not loaded', { toastId: "contract-not-loaded" });
                return;
            }

            if (!event) {
                toast.error("Event not found", { toastId: "event-not-loaded" });
                return;
            }

            if (event.ticketSold >= event.ticketCount) {
                toast.error("No tickets available", { toastId: "no-tickets-available" });
                return;
            }

            if (event.date < Math.floor(Date.now() / 1000)) {
                toast.error("Event has already passed", { toastId: "overdue-event" });
                return;
            }

            const ticketPrice = ethers.formatEther(event.ticketPrice);

            const provider = new ethers.BrowserProvider((window as any).ethereum);
            const signer = await provider.getSigner();

            const balance = await provider.getBalance(await signer.getAddress());

            if (BigInt(balance) < BigInt(event.ticketPrice)) {
                toast.error("Insufficient funds", { toastId: "insufficient-funds" });
                return;
            }

            const tx = await contract.contract.buyTicket(Number(id), { value: event.ticketPrice });
            console.log(tx);
            toast.success("Ticket purchased successfully!", { toastId: "ticket-bought" });
        } catch (error: any) {

            if (error.action === "sendTransaction" && error.reason === "rejected") {
                toast.info("Transaction cancelled by user", { toastId: "cancelled-transaction" });
            } else {
                console.error("Error purchasing ticket:", error);
                toast.error("Failed to purchase ticket. Please try again later.", { toastId: "error-buy-ticket" });
            }
        }
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