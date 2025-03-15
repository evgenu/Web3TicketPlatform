import React from 'react';
import logo from '../logo.svg';
import navbarStyles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faTicket } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <header>
            <div className={navbarStyles.navbar}>

                    <a className={navbarStyles['home-link-container']} href='/'>
                        <FontAwesomeIcon className={navbarStyles['logo']} icon={faTicket} />
                        <h1 className={navbarStyles['logo-text']}>TicketChain</h1>
                    </a>

                <div className={navbarStyles['navbar-links']}>

                    <ul className={navbarStyles['navbar-ul']}>
                        <li className={navbarStyles['navbar-list']}>

                            <a className={navbarStyles['navbar-a']} href="/">
                                Home
                            </a>
                        </li>

                        <li className={navbarStyles['navbar-list']}>
                            <a className={navbarStyles['navbar-a']} href="/events">
                                Events
                            </a>
                        </li>

                        <li className={navbarStyles['navbar-list']}>
                            <a className={navbarStyles['navbar-a']} href="/tickets">
                                My Tickets
                            </a>
                        </li>

                        <li className={navbarStyles['navbar-list']}>
                            <a className={navbarStyles['navbar-a']} href="/wallet">
                                Connect Wallet
                            </a>
                        </li>

                        <li className={navbarStyles['navbar-list']}>
                            <a className={navbarStyles['navbar-a']} href="/about">
                                AboutUs
                            </a>
                        </li>

                    </ul>

                </div>

                <div className={navbarStyles['user-profile-container']}>
                    <a className={navbarStyles['login-link']} href='/login'>
                        <FontAwesomeIcon className={navbarStyles['login-image']} icon={faCircleUser} />
                    </a>
                </div>

            </div>
        </header>

    );
}

export default Navbar;