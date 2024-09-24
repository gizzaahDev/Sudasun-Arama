import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './NavBar.css';
import flagGif from '../../assets/flag.gif';


const NavBar = () => {
    const [activeNavItem, setActiveNavItem] = useState('Home'); // Default active item
    const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
    const [openSubmenu, setOpenSubmenu] = useState(null); // Track which submenu is open

    const handleNavClick = (navItem) => {
        setActiveNavItem(navItem);
        setOpenDropdown(null);
        setOpenSubmenu(null);
    };

    const handleDropdownToggle = (dropdownName) => {
        setOpenDropdown(prevDropdown => prevDropdown === dropdownName ? null : dropdownName);
        setOpenSubmenu(null); // Hide submenu when main dropdown is toggled
    };

    const handleMouseEnterDropdown = (dropdownName) => {
        setOpenDropdown(dropdownName);
    };

    const handleMouseLeaveDropdown = () => {
        setOpenDropdown(null);
    };

    const handleMouseEnterSubmenu = (submenuName) => {
        setOpenSubmenu(submenuName);
    };

    const handleMouseLeaveSubmenu = () => {
        setOpenSubmenu(null);
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">සුදසුන් අරම☸️</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" ></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeNavItem === 'Home' ? 'active' : ''}`}
                                    aria-current="page"
                                    href="/"
                                    onClick={() => handleNavClick('Home')}
                                >
                                    Home
                                </a>
                            </li>
                            <li
                                className={`nav-item dropdown ${openDropdown === 'About Us' ? 'show' : ''}`}
                                onMouseEnter={() => handleMouseEnterDropdown('About Us')}
                                onMouseLeave={handleMouseLeaveDropdown}
                            >
                                <a
                                    className={`nav-link dropdown-toggle ${activeNavItem === 'About Us' ? 'active' : ''}`}
                                    href="#"
                                    role="button"
                                    aria-expanded={openDropdown === 'About Us'}
                                    onClick={() => handleDropdownToggle('About Us')}
                                >
                                    About Us▾
                                </a>
                                <ul className={`dropdown-menu ${openDropdown === 'About Us' ? 'show' : ''}`}>
                                    <li><a className="dropdown-item" href="/history">Temple History</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li
                                className={`nav-item dropdown ${openDropdown === 'Explore' ? 'show' : ''}`}
                                onMouseEnter={() => handleMouseEnterDropdown('Explore')}
                                onMouseLeave={handleMouseLeaveDropdown}
                            >
                                <a
                                    className={`nav-link dropdown-toggle ${activeNavItem === 'Explore' ? 'active' : ''}`}
                                    href="#"
                                    role="button"
                                    aria-expanded={openDropdown === 'Explore'}
                                    onClick={() => handleDropdownToggle('Explore')}
                                >
                                    Explore▾
                                </a>
                                <ul className={`dropdown-menu ${openDropdown === 'Explore' ? 'show' : ''}`}>
                                    <li><a className="dropdown-item" href="#">ධර්ම කරුණු</a></li>
                                    <li><a className="dropdown-item" href="#">පැරණි පොත්</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li
                                className={`nav-item dropdown ${openDropdown === 'More' ? 'show' : ''}`}
                                onMouseEnter={() => handleMouseEnterDropdown('More')}
                                onMouseLeave={handleMouseLeaveDropdown}
                            >
                                <a
                                    className={`nav-link dropdown-toggle ${activeNavItem === 'More' ? 'active' : ''}`}
                                    href="#"
                                    role="button"
                                    aria-expanded={openDropdown === 'More'}
                                    onClick={() => handleDropdownToggle('More')}
                                >
                                    More▾
                                </a>
                                <ul className={`dropdown-menu ${openDropdown === 'More' ? 'show' : ''}`}>
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li
                                className={`nav-item dropdown ${openDropdown === 'Events' ? 'show' : ''}`}
                                onMouseEnter={() => handleMouseEnterDropdown('Events')}
                                onMouseLeave={handleMouseLeaveDropdown}
                            >
                                <a
                                    className={`nav-link dropdown-toggle ${activeNavItem === 'Events' ? 'active' : ''}`}
                                    href="#"
                                    role="button"
                                    aria-expanded={openDropdown === 'Events'}
                                    onClick={() => handleDropdownToggle('Events')}
                                >
                                    Events▾
                                </a>
                                <ul className={`dropdown-menu ${openDropdown === 'Events' ? 'show' : ''}`}>
                                    <li><a className="dropdown-item" href="/poyaday">පෝදා වැඩසටහන</a></li>
                                    <li><a className="dropdown-item" href="#">වස් පිංකම</a></li>
                                    <li><hr className="dropdown-divider" /></li>

                                    <li
                                        onMouseEnter={() => handleMouseEnterSubmenu('EventsSubmenu')}
                                        onMouseLeave={handleMouseLeaveSubmenu}
                                    >
                                        <a
                                            className={`dropdown-item dropdown-toggle ${openSubmenu === 'EventsSubmenu' ? 'show' : ''}`}
                                            href="#"
                                            onClick={(e) => e.preventDefault()} // Prevent default link behavior
                                        >
                                            භාවන වැඩසටහන▾
                                        </a>
                                        <ul className={`dropdown-menu dropdown-menu-end ${openSubmenu === 'EventsSubmenu' ? 'show' : ''}`}>
                                            <li><a className="dropdown-item" href="#">01 day</a></li>
                                            <li><a className="dropdown-item" href="#">3 days</a></li>
                                            <li><a className="dropdown-item" href="#">7 days</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeNavItem === 'Donations' ? 'active' : ''}`}
                                    aria-current="page"
                                    href="#"
                                    onClick={() => handleNavClick('Donations')}
                                >
                                    Donations
                                </a>
                            </li>
                            <li className="nav-item">
                                <h4 style={{ color: "#CECECE" }}>|</h4>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link ${activeNavItem === 'KulaganaSociety' ? 'active' : ''}`}
                                    aria-current="page"
                                    href="#"
                                    onClick={() => handleNavClick('KulaganaSociety')}
                                >
                                    Kulangana Society
                                </a>
                            </li>
                        </ul>
                        <div className="d-flex" >
                            <img src={flagGif} alt="Flag Gif" className='hide-image' style={{ width: '20px', height: 'auto' }} />
                        </div>
                    </div>


                </div>
            </nav>
        </div>
    );
};

export default NavBar;
