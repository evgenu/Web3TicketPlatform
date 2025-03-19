import React, { useState } from 'react';
import navbarStyles from "../styles/Navbar.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faTicket } from '@fortawesome/free-solid-svg-icons';
import { ethers } from 'ethers';


import CONTRACT_ABI from '../constants/abis/TicketPlatform.json';
import { Link } from 'react-router-dom';
import { useContract } from '../hooks/contractHook';

const Navbar = () => {

    const { setContract } = useContract();

    const handleConnectWallet = async () => {
        if (window.ethereum != null) {
            const currentprovider = new ethers.BrowserProvider(window.ethereum);
            const signer = await currentprovider.getSigner();

            const currContract = new ethers.Contract("0x12dd4647bF90B39998bC4CB893FC1f96bE27ECc5", CONTRACT_ABI.abi, signer );
            setContract(currContract);
           
        } else {
            alert('Please install MetaMask!');
        }
    }

    return (
        <header>
            <div className={navbarStyles.navbar}>

                <a className={navbarStyles['home-link-container']} href='/'>
                    <FontAwesomeIcon className={navbarStyles['logo']} icon={faTicket} />
                    <h1 className={navbarStyles['logo-text']}>TicketChain</h1>
                </a>

                <nav className={navbarStyles['navbar-links']}>

                    <ul className={navbarStyles['navbar-ul']}>
                        <li className={navbarStyles['navbar-list']}>

                            <Link className={navbarStyles['navbar-a']} to="/">
                                Home
                            </Link>
                        </li>

                        <li className={navbarStyles['navbar-list']}>
                            <Link className={navbarStyles['navbar-a']} to="/events">
                                Events
                            </Link>
                        </li>

                        <li className={navbarStyles['navbar-list']}>
                           <Link className={navbarStyles['navbar-a']} to="/tickets">
                                Tickets
                            </Link>
                        </li>

                        <li className={navbarStyles['navbar-list']}>
                            <Link className={navbarStyles['navbar-a']} to="/about">
                                About Us
                            </Link>
                        </li>
                    </ul>

                </nav>

                <button className={navbarStyles['login-link']} onClick={handleConnectWallet}>
                    <FontAwesomeIcon className={navbarStyles['login-image']} icon={faCircleUser} />
                    <p className={navbarStyles['login-text']}>Connect Wallet</p>
                </button>

            </div>
        </header>
    );
}

export default Navbar;