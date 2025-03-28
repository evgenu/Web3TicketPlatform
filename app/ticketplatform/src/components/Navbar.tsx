import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ethers } from 'ethers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faTicket, faRectangleList } from '@fortawesome/free-solid-svg-icons';
import { useContract } from '../hooks/contractHook';
import { useUser } from '../hooks/userHook';
import { toast, ToastContainer } from 'react-toastify'; // Import toast functions
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import navbarStyles from "../styles/Navbar.module.css";
import CONTRACT_ABI from '../constants/abis/TicketPlatform.json';

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [userAddress, setUserAddress] = useState<string | null>(null);
    const contractContext = useContract();
    const user = useUser();

    const handleConnectWallet = async () => {
        try {
            if ((window as any).ethereum != null) {
                const currentProvider = new ethers.BrowserProvider((window as any).ethereum);
                const signer = await currentProvider.getSigner();

                const currContract = new ethers.Contract("0x12dd4647bF90B39998bC4CB893FC1f96bE27ECc5", CONTRACT_ABI.abi, signer);
                if (contractContext && contractContext.setContract && user && user.setUser) {
                    contractContext.setContract(currContract);
                    user.setUser(signer);
                    setUserAddress(await signer.getAddress());
                    toast.success('Wallet connected successfully!'); // Success toast
                }
            } else {
                throw new Error('MetaMask is not installed. Please install MetaMask to connect your wallet.');
            }
        } catch (error: any) {
            console.error('Error connecting wallet:', error);
            toast.error(error.message || 'An unexpected error occurred while connecting the wallet.'); // Error toast
        }
    }

    const toggleMenu = () => {
        // Flip the "menuOpen" boolean in state
        setMenuOpen(prev => !prev);
    };

    return (
        <>
            <header className={navbarStyles['navbar']}>

                <NavLink className={navbarStyles['home-link-container']} to="/">
                    <FontAwesomeIcon className={navbarStyles['logo']} icon={faTicket} />
                    <h1 className={navbarStyles['logo-text']}>TicketChain</h1>
                </NavLink>

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
                            <NavLink className={navbarStyles['navbar-a']} to="/about">
                                About Us
                            </NavLink>
                        </li>

                        <li className={navbarStyles['navbar-list']}>
                            <NavLink className={navbarStyles['navbar-a']} to="/contactUs">
                                Contact Us
                            </NavLink>
                        </li>

                    </ul>
                </nav>


                <div className={navbarStyles['navbar-controls']}>
                    <button className={navbarStyles['login-button']} onClick={handleConnectWallet}>

                        <p className={navbarStyles['login-text']}>
                            {contractContext?.contract ? `${userAddress?.slice(0, 11)}...` : 'Connect Wallet'}
                        </p>
                        <FontAwesomeIcon className={navbarStyles['login-image']} icon={faCircleUser} />
                    </button>

                    <button
                        aria-expanded={menuOpen}
                        aria-controls="navbar-links"
                        className={navbarStyles['mobile-nav-toggle']}
                        onClick={toggleMenu}
                    >
                        <FontAwesomeIcon icon={faRectangleList} />
                    </button>
                </div>
            </header>
            <ToastContainer
                autoClose={2000}
                closeOnClick={true}
                pauseOnHover={false}
                style={{
                    top: '55px'
                }}
            />
        </>
    );
}

export default Navbar;
