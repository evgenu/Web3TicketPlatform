import React from 'react';
import logo from '../logo.svg';
import navbarStyles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <header>
                <div className={navbarStyles.navbar}>
                    <img src={logo} className={navbarStyles['app-logo']}></img>
                    <ul className={navbarStyles['navbar-logged-user']}> 
                        <li className={`${navbarStyles['navbar-list']} ${navbarStyles['navbar-list:hover']}`}>
                            <a className={`${navbarStyles['navbar-links']} ${navbarStyles['navbar-links:hover']}`} href="/">
                            Home
                            </a>
                        </li>
                        <li className={`${navbarStyles['navbar-list']} ${navbarStyles['navbar-list:hover']}`}>
                            <a className={`${navbarStyles['navbar-links']} ${navbarStyles['navbar-links:hover']}`} href="/events">
                            Events
                            </a>
                        </li>
                        <li className={`${navbarStyles['navbar-list']} ${navbarStyles['navbar-list:hover']}`}>
                            <a className={`${navbarStyles['navbar-links']} ${navbarStyles['navbar-links:hover']}`} href="/about">
                            AboutUs
                            </a>
                        </li>
                        <li className={`${navbarStyles['navbar-list']} ${navbarStyles['navbar-list:hover']}`}>
                            <a className={`${navbarStyles['navbar-links']} ${navbarStyles['navbar-links:hover']}`} href="/tickets">
                            My Tickets
                            </a>
                        </li>
                        <li className={`${navbarStyles['navbar-list']} ${navbarStyles['navbar-list:hover']}`}>
                            <a className={`${navbarStyles['navbar-links']} ${navbarStyles['navbar-links:hover']}`} href="/wallet">
                            Connect Wallet
                            </a>
                        </li>
                    </ul>
                </div>
        </header>
            
    );
}

export default Navbar;