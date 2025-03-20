import React from 'react';
import footerStyles from '../styles/Footer.module.css';
import logo from '../logo.svg';

const copyToClipboardPhone = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => alert("Phone number copied to clipboard!"))
        .catch(err => console.error("Error copying text: ", err));
};

const copyToClipboardEmail = (text) => {
    navigator.clipboard.writeText(text)
        .then(() => alert("Email number copied to clipboard!"))
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
								<a className={footerStyles["footer-links"]} href="/">
									Home
								</a>
							</li>
							<li className={footerStyles["footer-list"]}>
								<a className={footerStyles["footer-links"]} href="/events">
									Events
								</a>
							</li>
							<li className={footerStyles["footer-list"]}>
								<a className={footerStyles["footer-links"]} href="/about">
									AboutUs
								</a>
							</li>
							<li className={footerStyles["footer-list"]}>
								<a className={footerStyles["footer-links"]} href="/tickets">
									My Tickets
								</a>
							</li>
							<li className={footerStyles["footer-list"]}>
								<a className={footerStyles["footer-links"]} href="/wallet">
									Connect Wallet
								</a>
							</li>
						</ul>
					</div>

					{/* need to include links for the login and registration pages */}
					<div className={footerStyles['card-footer']}>
						<h3 className={footerStyles['card-footer-h3']}>Account</h3>
						<hr className={footerStyles["hor-line"]}></hr>
						<ul>
							<li className={footerStyles["footer-list"]}>
								<a className={footerStyles["footer-links"]} href="/wallet">
									Connect Wallet
								</a>
							</li>
						</ul>

						<h3 className={footerStyles['card-footer-h3']}>Other</h3>
						<hr className={footerStyles["hor-line"]}></hr>
						<ul>
							<li className={footerStyles["footer-list"]}>
								<a className={footerStyles["footer-links"]} href="/">
									FAQ
								</a>
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
						<p className={footerStyles["card-footer-p"]}>address: <br /> 7 Ulitsa str. 4400</p>
					</div>
				</div>

				<div className={footerStyles['footer-copyright']}>
       				© Copyright - NFT.bg 2025
    			</div>
			</div>
		</footer>
	);
}

export default Footer;