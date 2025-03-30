import React from 'react';
import footerStyles from '../styles/Footer.module.css';
import logo from '../logo.svg';
import { Link } from "react-router-dom";

const copyToClipboardPhone = (text: string) => {
	navigator.clipboard.writeText(text)
		.then(() => alert("Phone number copied to clipboard!"))
		.catch(err => console.error("Error copying text: ", err));
};

const copyToClipboardEmail = (text: string) => {
	navigator.clipboard.writeText(text)
		.then(() => alert("Email copied to clipboard!"))
		.catch(err => console.error("Error copying text: ", err));
};

const copyToClipboardAddress = (text: string) => {
	navigator.clipboard.writeText(text)
		.then(() => alert("Address copied to clipboard!"))
		.catch(err => console.error("Error copying text: ", err));
};


const Footer = () => {
	return (
		<footer>
			<div className={footerStyles['footer-container']}>
				<div className={footerStyles["footer-components"]}>

					{/* Company info setion */}

					<div className={footerStyles['card-footer']}>
						<img src={logo}
							className={footerStyles['company-info-img']}
							alt="Company Image" />
						<h3 className={footerStyles["card-footer-h3"]}>TicketChain</h3>
						<hr className={footerStyles["hor-line"]}></hr>
						<p className={footerStyles["card-footer-p"]}>Our NFT-based ticket platform revolutionizes event access by providing secure,
							verifiable, and tradeable digital tickets on the blockchain, eliminating fraud and scalping.
						</p>
					</div>

					{/* Browse section */}

					<div className={footerStyles['card-footer']}>
						<h3 className={footerStyles['card-footer-h3']}>Browse</h3>
						<hr className={footerStyles["hor-line"]}></hr>
						<ul>
							<li className={footerStyles["footer-list"]}>
								<Link className={footerStyles["footer-links"]} to="/">
									Home
								</Link>
							</li>
							<li className={footerStyles["footer-list"]}>
								<Link className={footerStyles["footer-links"]} to="/events">
									Events
								</Link>
							</li>
							<li className={footerStyles["footer-list"]}>
								<Link className={footerStyles["footer-links"]} to="/about">
									AboutUs
								</Link>
							</li>
							<li className={footerStyles["footer-list"]}>
								<Link className={footerStyles["footer-links"]} to="/contactUs">
									Contact Us
								</Link>
							</li>
							<li className={footerStyles["footer-list"]}>
								<Link className={footerStyles["footer-links"]} to="/myTickets">
									My Tickets
								</Link>
							</li>
						</ul>
					</div>

					{/* need to include links for the login and registration pages */}
					<div className={footerStyles['card-footer']}>
						<h3 className={footerStyles['card-footer-h3']}>Account</h3>
						<hr className={footerStyles["hor-line"]}></hr>
						<ul>
							<li className={footerStyles["footer-list"]}>
								<Link className={footerStyles["footer-links"]} to="/wallet">
									Connect Wallet
								</Link>
							</li>
						</ul>

						<h3 className={footerStyles['card-footer-h3']}>Other</h3>
						<hr className={footerStyles["hor-line"]}></hr>
						<ul>
							<li className={footerStyles["footer-list"]}>
								<Link className={footerStyles["footer-links"]} to="/faq">
									FAQ
								</Link>
							</li>
						</ul>
					</div>


					{/* Contacts section with hypelinks for copying them to the clipboard */}

					<div className={footerStyles["card-footer"]}>
						<h3 className={footerStyles["card-footer-h3"]}>Contacts</h3>
						<hr className={footerStyles["hor-line"]}></hr>
						<p className={footerStyles["card-footer-p"]}>Telephone: <br /><span className={footerStyles["copy-text"]}
							onClick={() => copyToClipboardPhone("+359 8764356789")}>
							+359 8764356789
						</span>
						</p>
						<p className={footerStyles["card-footer-p"]}>email: <br /><span className={footerStyles["copy-text"]}
							onClick={() => copyToClipboardEmail("zazaazaa78@gmail.com")}>
							zazaazaa78@gmail.com
						</span>
						</p>
						<p className={footerStyles["card-footer-p"]}>address: <br /><span className={footerStyles["copy-text"]}
							onClick={() => copyToClipboardAddress("7 Hebros str. Pazardzhik")}>
							7 Hebros str. Pazardzhik
						</span> </p>
					</div>
				</div>

				<div className={footerStyles['footer-copyright']}>
					© Copyright - TicketChain.bg 2025
				</div>
			</div>
		</footer>
	);
}

export default Footer;