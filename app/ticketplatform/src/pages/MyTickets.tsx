import React, { useEffect, useState } from 'react';
import profileStyles from '../styles/ProfileTickets.module.css';
import { Link } from "react-router-dom";
import { useContract } from '../hooks/contractHook';
import { useUser } from '../hooks/userHook';
import DisplayTicket from '../components/DisplayTicket';
import myTicketsStyles from '../styles/MyTickets.module.css';

interface Ticket {
    ticketId: number;
    eventId: number;
    eventName: string;
    eventDate: number;
    eventDescription: string;
}

function MyTickets() {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [upcomingTickets, setUpcomingTickets] = useState<Ticket[]>([]);
    const [pastTickets, setPastTickets] = useState<Ticket[]>([]);
    const { contract } = useContract() || {};
    const { user } = useUser() || {};

    const loadTickets = async () => {
        if (!contract || !user) return;
        try {
            const userAddress = await user.getAddress();
            const ticketCount = await contract.balanceOf(userAddress);
            const userTickets: Ticket[] = [];

            for (let i = 0; i < ticketCount; i++) {
                const ticketId = await contract.tokenOfOwnerByIndex(userAddress, i);
                const eventId = await contract.ticketEvent(ticketId);
                const eventDetails = await contract.getEventDetails(eventId);

                userTickets.push({
                    ticketId: ticketId,
                    eventId: eventId,
                    eventName: eventDetails[0],
                    eventDescription: eventDetails[1],
                    eventDate: eventDetails[2],
                });
            }

            // Separate tickets into upcoming and past
            const currentTimestamp = Math.floor(Date.now() / 1000); // Current time in seconds
            const upcoming = userTickets.filter(ticket => ticket.eventDate >= currentTimestamp);
            const past = userTickets.filter(ticket => ticket.eventDate < currentTimestamp);

            setTickets(userTickets);
            setUpcomingTickets(upcoming);
            setPastTickets(past);
        } catch (error) {
            console.error("Error loading tickets", error);
        }
    };

    useEffect(() => {
        loadTickets();
    }, [contract, user]);

    return (
        <div>
            <h1 className={myTicketsStyles["main-heading-page-ticket"]}>My Tickets</h1>

            {/* Upcoming Events Section */}
            <h2 className={myTicketsStyles["second-heading-page-ticket"]}>Upcoming Events</h2>
            {upcomingTickets.length === 0 ? (
                <p className={myTicketsStyles["paragraph-page-ticket"]}>You have no upcoming tickets.</p>
            ) : (
                <div className={myTicketsStyles["my-tickets-components"]}>
                    {upcomingTickets.map((ticket, i) => (
                        <DisplayTicket
                            key={i}
                            name={ticket.eventName}
                            date={new Date(Number(ticket.eventDate) * 1000).toLocaleDateString()}
                            description={ticket.eventDescription}
                        />
                    ))}
                </div>
            )}

            {/* Past Events Section */}
            <h2 className={myTicketsStyles["second-heading-page-ticket"]}>Past Events</h2>
            {pastTickets.length === 0 ? (
                <p className={myTicketsStyles["paragraph-page-ticket"]}>You have no past tickets.</p>
            ) : (
                <div className={myTicketsStyles["my-tickets-components"]}>
                    {pastTickets.map((ticket, i) => (
                        <DisplayTicket
                            key={i}
                            name={ticket.eventName}
                            date={new Date(Number(ticket.eventDate) * 1000).toLocaleDateString()}
                            description={ticket.eventDescription}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyTickets;