import React, { useState } from 'react';
import navbarStyles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faTicket, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { ethers } from 'ethers';

import CONTRACT_ABI from '../constants/abis/TicketPlatform.json';
import { NavLink } from 'react-router-dom';
import { useContract } from '../hooks/contractHook';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const { setContract } = useContract();

    const handleConnectWallet = async () => {
        if (window.ethereum != null) {
            const currentProvider = new ethers.BrowserProvider(window.ethereum);
            const signer = await currentProvider.getSigner();

            const currContract = new ethers.Contract("0x12dd4647bF90B39998bC4CB893FC1f96bE27ECc5", CONTRACT_ABI.abi, signer);
            setContract(currContract);

        } else {
            alert('Please install MetaMask!');
        }
    }

    const toggleMenu = () => {
        // Flip the "menuOpen" boolean in state
        setMenuOpen(prev => !prev);
      };

    return (
        <header className={navbarStyles.navbar}>

            <NavLink className={navbarStyles['home-link-container']} to="/">
                <FontAwesomeIcon className={navbarStyles['logo']} icon={faTicket} />
                <h1 className={navbarStyles['logo-text']}>TicketChain</h1>
            </NavLink>

            <button
                aria-expanded={menuOpen}
                aria-controls="navbar-links"
                className={navbarStyles['mobile-nav-toggle']}
                onClick={toggleMenu}
            >
                <FontAwesomeIcon icon={faRectangleList} />
            </button>

            <nav>
                <ul id="navbar-links" data-visible={menuOpen} className={navbarStyles['navbar-links']}>
                    <li className={navbarStyles['navbar-list']}>

                        <NavLink className={navbarStyles['navbar-a']} to="/">
                            Home
                        </NavLink>
                    </li>

                    <li className={navbarStyles['navbar-list']}>
                        <NavLink className={navbarStyles['navbar-a']} to="/events">
                            Events
                        </NavLink>
                    </li>

                    <li className={navbarStyles['navbar-list']}>
                        <NavLink className={navbarStyles['navbar-a']} to="/tickets">
                            Tickets
                        </NavLink>
                    </li>

                    <li className={navbarStyles['navbar-list']}>
                        <NavLink className={navbarStyles['navbar-a']} to="/about">
                            About Us
                        </NavLink>
                    </li>
                </ul>
            </nav>


            <button className={navbarStyles['login-button']} onClick={handleConnectWallet}>
                <FontAwesomeIcon className={navbarStyles['login-image']} icon={faCircleUser} />
            </button>

        </header>
    );
}

export default Navbar;