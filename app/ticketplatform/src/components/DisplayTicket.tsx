import React from "react";
import merchCard from "../styles/MerchCard.module.css";
import logo from '../logo.svg';

interface Ticket {
	name: string
	date: string
	description: string
}

function DisplayTicket(props: Ticket) {
	return (
		<div className={merchCard["card-merch-display"]}>
			<div className={merchCard['card-merch']}>
				<img src={logo} 
							className={merchCard['company-merch-img']}
							alt="Company Image" />
				<h3 className={merchCard["card-merch-h3"]}>{props.name}</h3>
				<p className={merchCard["card-merch-p"]}>{props.date}</p>
				<p className={merchCard["card-merch-description"]}>{props.description}</p>
			</div>
		</div>
	);
}

export default DisplayTicket; 