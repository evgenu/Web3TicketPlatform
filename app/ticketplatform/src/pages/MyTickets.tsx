import React, { useEffect, useState } from 'react';
import profileStyles from '../styles/ProfileTickets.module.css';
import { Link } from "react-router-dom";
import { useContract } from '../hooks/contractHook';
import { useUser } from '../hooks/userHook';
import DisplayTicket from '../components/DisplayTicket';

interface Ticket {
	ticketId: number
	eventId: number
	eventName: string
	eventDate: number
	eventDescription: string
}

function ProfileTickets() {
	const [tickets, setTickets] = useState<Ticket[]>([]);
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
					eventDate: eventDetails[2]
				});
			}
			setTickets(userTickets);
		} catch (error) {
			console.error("Error loading tickets", error)
		}
	};

	useEffect(() => {
		loadTickets();
	}, [contract, user])

	return (
		<div>
			<h1>My tickets</h1>

			{tickets.length === 0 ? (
				<p>You have no tickets.</p>
			) : (
				<div>
					{tickets.map((ticket) => (
						<DisplayTicket
							name={ticket.eventName}
							date={new Date(Number(ticket.eventDate) * 1000).toLocaleDateString()}
							description={ticket.eventDescription}
						/>
					))};
				</div>
			)}
		</div>

	);
};

export default ProfileTickets;
