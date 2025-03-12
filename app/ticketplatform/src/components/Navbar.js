import React from 'react';
import logo from '../logo.svg';
import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <header>
                <div className="navbar">
                    <img src={logo} className="app-logo"></img>
                    <ul className="navbar-logged-user">
                        <li><a href="/">Home</a></li>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/marketplace">Marketplace</a></li>
                        <li><a href="/tickets">My Tickets</a></li>
                        <li><a href="/wallet">Connect Wallet</a></li>
                    </ul>
                </div>
        </header>
            
    );
}

export default Navbar;