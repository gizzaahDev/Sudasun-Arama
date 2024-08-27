import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './NavBar.css'; // Import custom CSS

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNavItem: 'Home', // Default active item
            openDropdown: null, // Track which dropdown is open
            openSubmenu: null, // Track which submenu is open
        };
    }

    handleNavClick = (navItem) => {
        this.setState({ activeNavItem: navItem, openDropdown: null, openSubmenu: null });
    };

    handleDropdownToggle = (dropdownName) => {
        this.setState(prevState => ({
            openDropdown: prevState.openDropdown === dropdownName ? null : dropdownName,
            openSubmenu: null // Hide submenu when main dropdown is toggled
        }));
    };

    handleMouseEnterDropdown = (dropdownName) => {
        this.setState({ openDropdown: dropdownName });
    };

    handleMouseLeaveDropdown = () => {
        this.setState({ openDropdown: null });
    };

    handleMouseEnterSubmenu = (submenuName) => {
        this.setState({ openSubmenu: submenuName });
    };

    handleMouseLeaveSubmenu = () => {
        this.setState({ openSubmenu: null });
    };

    render() {
        const { activeNavItem, openDropdown, openSubmenu } = this.state;

        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">සුදසුන් අරම☸️</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${activeNavItem === 'Home' ? 'active' : ''}`}
                                        aria-current="page"
                                        href="#"
                                        onClick={() => this.handleNavClick('Home')}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li
                                    className={`nav-item dropdown ${openDropdown === 'About Us' ? 'show' : ''}`}
                                    onMouseEnter={() => this.handleMouseEnterDropdown('About Us')}
                                    onMouseLeave={this.handleMouseLeaveDropdown}
                                >
                                    <a
                                        className={`nav-link dropdown-toggle ${activeNavItem === 'About Us' ? 'active' : ''}`}
                                        href="#"
                                        role="button"
                                        aria-expanded={openDropdown === 'About Us'}
                                        onClick={() => this.handleDropdownToggle('About Us')}
                                    >
                                        About Us▾
                                    </a>
                                    <ul className={`dropdown-menu ${openDropdown === 'About Us' ? 'show' : ''}`}>
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </li>
                                <li
                                    className={`nav-item dropdown ${openDropdown === 'Explore' ? 'show' : ''}`}
                                    onMouseEnter={() => this.handleMouseEnterDropdown('Explore')}
                                    onMouseLeave={this.handleMouseLeaveDropdown}
                                >
                                    <a
                                        className={`nav-link dropdown-toggle ${activeNavItem === 'Explore' ? 'active' : ''}`}
                                        href="#"
                                        role="button"
                                        aria-expanded={openDropdown === 'Explore'}
                                        onClick={() => this.handleDropdownToggle('Explore')}
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
                                    onMouseEnter={() => this.handleMouseEnterDropdown('More')}
                                    onMouseLeave={this.handleMouseLeaveDropdown}
                                >
                                    <a
                                        className={`nav-link dropdown-toggle ${activeNavItem === 'More' ? 'active' : ''}`}
                                        href="#"
                                        role="button"
                                        aria-expanded={openDropdown === 'More'}
                                        onClick={() => this.handleDropdownToggle('More')}
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
                                    onMouseEnter={() => this.handleMouseEnterDropdown('Events')}
                                    onMouseLeave={this.handleMouseLeaveDropdown}
                                >
                                    <a
                                        className={`nav-link dropdown-toggle ${activeNavItem === 'Events' ? 'active' : ''}`}
                                        href="#"
                                        role="button"
                                        aria-expanded={openDropdown === 'Events'}
                                        onClick={() => this.handleDropdownToggle('Events')}
                                    >
                                        Events▾
                                    </a>
                                    <ul className={`dropdown-menu ${openDropdown === 'Events' ? 'show' : ''}`}>
                                        <li><a className="dropdown-item" href="#">පෝදා වැඩසටහන</a></li>
                                        <li><a className="dropdown-item" href="#">වස් පිංකම</a></li>
                                        <li><hr className="dropdown-divider" /></li>

                                        <li
                                            onMouseEnter={() => this.handleMouseEnterSubmenu('EventsSubmenu')}
                                            onMouseLeave={this.handleMouseLeaveSubmenu}
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
                                        onClick={() => this.handleNavClick('Donations')}
                                    >
                                        Donations
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-warning" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}
