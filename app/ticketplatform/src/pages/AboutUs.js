import React from 'react';
import '../styles/AboutUs.css'


function AboutUs()
{
  return (
    <div className="about-container">
		<div className='container'>
			<h1><strong>About Us</strong></h1>
			<h2> Who We Are </h2>
			<p>We are a team of <strong>five passionate software engineers</strong> with a shared vision of revolutionizing the ticketing industry. By leveraging blockchain and smart contract technology, we provide a trustless, fraud-proof, and user-centric experience for event organizers and customers alike.</p>
			
			<div className="team">
				<div className="team-member">
					<h3>Rumen Kalchev</h3>
					<img src="https://via.placeholder.com/150" alt="Team Member" />
					<p>MEMBER</p>
				</div>
				<div className="team-member">
					<h3>Georgi Stoev</h3>
					<img src="https://via.placeholder.com/150" alt="Team Member" />
					<p>MEMBER</p>
				</div>
				<div className="team-member">
					<h3>Ivan Andonov</h3>
					<img src="https://via.placeholder.com/150" alt="Team Member" />
					<p>MEMBER</p>
				</div>
				<div className="team-member">
					<h3>Evgeni Atanasov</h3>
					<img src="https://via.placeholder.com/150" alt="Team Member" />
					<p>MEMBER</p>
				</div>
				<div className="team-member">
					<h3>Valeri Mirchevski</h3>
					<img src="https://via.placeholder.com/150" alt="Team Member" />
					<p>MEMBER</p>
				</div>
			</div>	

			<h2>Our Mission</h2>
			<p>Our mission is to redefine ticket management through <strong>decentralization, security, and efficiency</strong>. We believe in empowering users with full ownership of their tickets while eliminating issues like scalping, counterfeit tickets, and middleman fees.</p>

			<h2>What We Offer</h2>
			<ul>
				<li><strong>Web3-Powered Event Ticketing:</strong> Issue and manage tamper-proof, verifiable digital tickets using blockchain technology.</li>
				{/* <li><strong>Decentralized Customer Support Ticketing:</strong> Ensure trust and transparency with immutable records of customer interactions.</li> */}
				{/* <li><strong>Smart Contracts for Automation:</strong> Automate ticket validation, refunds, and transfers without intermediaries.</li> */}
				<li><strong>Multi-Channel Integration:</strong> Manage tickets across decentralized apps (dApps), email, and messaging platforms.</li>
				<li><strong>Data Privacy & Security:</strong> Your tickets and transactions are encrypted and stored securely on a blockchain network.</li>
			</ul>

			<h2>Why Choose Us?</h2>
			<ul>
				<li><strong>Decentralzed & Trustless:</strong> No third parties—your tickets are securely stored and verifiable on the blockchain.</li>
				<li><strong>Scalping & Fraud Prevention:</strong> Blockchain authentication ensures tickets cannot be counterfeited or resold unfairly.</li>
				<li><strong>Smart Contract Efficiency:</strong> Automate processes like refunds and ticket transfers with pre-defined rules.</li>
				<li><strong>Community-Driven Development:</strong> Built by engineers who believe in Web3’s potential to transform industries.</li>
			</ul>

			<a href="https://chatgpt.com/" class="cta">Join Us Today</a>

			<p>Join us in shaping the future of ticketing with Web3. Experience the power of decentralization with <strong>NFT.bg</strong> today!</p>
		</div>
	</div>
  );
};

export default AboutUs;
