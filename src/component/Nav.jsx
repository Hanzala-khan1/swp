import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';
import './css/Nav.css';
import logo from "../assets/logo2.png"
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const location = useLocation();

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
                <ul>
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={location.pathname === '/about' ? 'active' : ''}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={`dd-menu ${location.pathname === '/services' ? 'active' : ''}`} >
                        <Link to="/services">Services</Link>
                        {/* Add the dropdown menu */}
                        <ul className='dropdown'>
                            <li className={location.pathname === '/services/WeddingChoreography' ? 'active' : ''}>
                                <Link to="/services/WeddingChoreography">Wedding Choreography</Link>
                            </li>
                            <li className={location.pathname === '/services/BollywoodDanceClass' ? 'active' : ''}>
                                <Link to="/services/BollywoodDanceClass">Bollywood Dance Classes</Link>
                            </li>
                            <li>
                                <Link to="/contact-us">Bollywood Special Events and SWP</Link>
                            </li>
                            <li className={location.pathname === '/services/StudioForRent' ? 'active' : ''}>
                                <Link to="/services/StudioForRent">Studio for Rent</Link>
                            </li>
                        </ul>
                    </li>
                    {/* <li>
                        <Link to="/gallery">Gallery</Link>
                    </li> */}
                    <li className={`dd-menu ${location.pathname === ('/gallery' || "/blogs" || "/testnomials") ? 'active' : ''}`} >
                        <Link to="/gallery">Portfolio</Link>
                        <ul className='dropdown'>
                            <li>
                                <Link to="/blogs">Blogs</Link>
                            </li>
                            <li>
                                <Link to="/testimonials">Testimonials</Link>
                            </li>
                        </ul>
                    </li>
                    {/* <li>
                        <Link to="/blogs">Blogs</Link>
                    </li> */}
                    <li className={location.pathname === '/contact-us' ? 'active' : ''}>
                        <Link to="/contact-us">Contact</Link>
                    </li>
                </ul>
            </div>

            <div className='icons'>
                <a href='https://web.facebook.com/swaywithpray/?_rdc=1&_rdr' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} className='iconsfont' />
                </a>
                <a href='https://www.instagram.com/swaywithpray/?hl=en' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} className='iconsfont' />
                </a>
                <a href='https://www.youtube.com/channel/UC04eJMg0UhmhrvXfiXyvW5g' target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} className='iconsfont' />
                </a>
            </div>
            <div className="navbar-menu-button" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </nav>
    );
};

export default Navbar;