import React from "react";
import merchCard from "../styles/MerchCard.module.css";
import logo from '../logo.svg';


function MerchCard() {
	return (
		<div className={merchCard["card-merch-display"]}>
			<div className={merchCard['card-merch']}>
				<img src={logo} 
							className={merchCard['company-merch-img']}
							alt="Company Image" />
				<h3 className={merchCard["card-merch-h3"]}>GLOVES</h3>
				<p className={merchCard["card-merch-p"]}>Full cotton gloves for best Elrow experience</p>
			</div>
		</div>
	);
}

export default MerchCard; 