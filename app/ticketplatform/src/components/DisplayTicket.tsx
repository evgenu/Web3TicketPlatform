import React from "react";
import displayTicketStyles from "../styles/DisplayTicket.module.css";
import logo from '../logo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicket } from "@fortawesome/free-solid-svg-icons";

interface Ticket {
	name: string
	date: string
	description: string
}

function DisplayTicket(props: Ticket) {
	return (
		<div className={displayTicketStyles["card-ticket-display"]}>
			<div className={displayTicketStyles['card-ticket']}>
				<FontAwesomeIcon className={displayTicketStyles['ticket-logo']} icon={faTicket} />
				<h3 className={displayTicketStyles["card-ticket-h3"]}>{props.name}</h3>
				<p className={displayTicketStyles["card-ticket-p"]}>{props.date}</p>
				<p className={displayTicketStyles["card-ticket-description"]}>{props.description}</p>
			</div>
		</div>
	);
}

export default DisplayTicket; 