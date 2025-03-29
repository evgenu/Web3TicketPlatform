import React from 'react';
import aboutStyles from '../styles/AboutUs.module.css';
import { Link } from "react-router-dom";


function AboutUs() {
  return (
    <div className={aboutStyles['about-container']}>
      <div className={aboutStyles.container}>
        <h1 className={aboutStyles['about-container-h1']}><strong className={aboutStyles["about_strong"]}>About Us</strong></h1>
        <h2> Who We Are </h2>
        <p className={aboutStyles['about-container-p']}>We are a team of
           <strong className={aboutStyles["about-strong"]}> five passionate software engineers </strong>
            with a shared vision of revolutionizing the ticketing industry. By leveraging blockchain and smart contract technology, we provide a trustless,
             fraud-proof, and user-centric experience for event organizers and customers alike.
        </p>
        
        <div className={aboutStyles.team}>
          
          <div className={aboutStyles['team-member']}>
          <Link to="/contactUs" className={aboutStyles["about-link-styles"]}>
            <h3 className={aboutStyles['team-member-h3']}>Rumen Kalchev</h3>
            <p className={aboutStyles['team-member-p']}><br></br>MEMBER</p>
          </Link>
          </div>

          <div className={aboutStyles['team-member']}>
          <Link to="/contactUs" className={aboutStyles["about-link-styles"]}>
            <h3 className={aboutStyles['team-member-h3']}>Georgi Stoev</h3>
            <p className={aboutStyles['team-member-p']}><br></br>MEMBER</p>
          </Link>
          </div>

          <div className={aboutStyles['team-member']}>
          <Link to="/contactUs" className={aboutStyles["about-link-styles"]}>
            <h3 className={aboutStyles['team-member-h3']}>Ivan Andonov</h3>
            <p className={aboutStyles['team-member-p']}><br></br>MEMBER</p>
          </Link>
          </div>


          <div className={aboutStyles['team-member']}>
          <Link to="/contactUs" className={aboutStyles["about-link-styles"]}>
            <h3 className={aboutStyles['team-member-h3']}>Evgeni Atanasov</h3>
            <p className={aboutStyles['team-member-p']}><br></br>MEMBER</p>
          </Link>
          </div>

          <div className={aboutStyles['team-member']}>
          <Link to="/contactUs" className={aboutStyles["about-link-styles"]}>
            <h3 className={aboutStyles['team-member-h3']}>Valeri Mirchevski</h3>
            <p className={aboutStyles['team-member-p']}><br></br>MEMBER</p>
          </Link>
          </div>

        </div>  

        <h2>Our Mission</h2>
        <p className={aboutStyles["about-paragraph"]}>Our mission is to redefine 
          ticket management through <strong className={aboutStyles['about-strong']}>decentralization,
          security, and efficiency</strong>.
           We believe in empowering users with full ownership of their tickets while eliminating issues like scalping, counterfeit tickets, and middleman fees.</p>

        <h2>What We Offer</h2>
        <ul className={aboutStyles["unordered_list_about"]}>
          <li className={aboutStyles['ul-list-items']}><strong className={aboutStyles['about-strong']}>Web3-Powered Event Ticketing:</strong> Issue and manage tamper-proof, verifiable digital tickets using blockchain technology.</li>
          <li className={aboutStyles['ul-list-items']}><strong className={aboutStyles['about-strong']}>Multi-Channel Integration:</strong> Manage tickets across decentralized apps (dApps), email, and messaging platforms.</li>
          <li className={aboutStyles['ul-list-items']}><strong className={aboutStyles['about-strong']}>Data Privacy & Security:</strong> Your tickets and transactions are encrypted and stored securely on a blockchain network.</li>
        </ul>

        <h2>Why Choose Us?</h2>
        <ul className={aboutStyles["unordered_list_about"]}>
          <li className={aboutStyles['ul-list-items']}><strong className={aboutStyles['about-strong']}>Decentralized & Trustless:</strong>
            No third parties—your tickets are securely stored and verifiable on the blockchain.</li>
          <li className={aboutStyles['ul-list-items']}><strong className={aboutStyles['about-strong']}>Scalping & Fraud Prevention:</strong>
            Blockchain authentication ensures tickets cannot be counterfeited or resold unfairly.</li>
          <li className={aboutStyles['ul-list-items']}><strong className={aboutStyles['about-strong']}>Smart Contract Efficiency:</strong>
            Automate processes like refunds and ticket transfers with pre-defined rules.</li>
          <li className={aboutStyles['ul-list-items']}><strong className={aboutStyles['about-strong']}>Community-Driven Development:</strong>
            Built by engineers who believe in Web3’s potential to transform industries.</li>
        </ul>

        <a href="https://chatgpt.com/" className={aboutStyles["call-to-action-button"]}>Join Us Today</a>

        <p className={aboutStyles["about-paragraph"]}>Join us in shaping the future of ticketing with Web3. Experience the power of decentralization with <strong className={aboutStyles["about_strong"]}>TicketChain.bg</strong> today!</p>
      </div>
    </div>
  );
};

export default AboutUs;
