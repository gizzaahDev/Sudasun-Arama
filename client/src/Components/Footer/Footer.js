import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {   } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope , faPhone ,faLocationDot } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';


export default class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                    <div className="footer-container">
                        <div>
                            <img src="/path-to-your-logo.png" alt="Brand Logo" />
                        </div>
                        <div>
                            <h3 className='mid-container'>Quick Links</h3>
                            <div >
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/services">Services</a></li>
                                    <li><a href="/contact">Contact</a></li>

                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className='mid-container'>Contact Us</h3>
                            <div >
                                <p><span className='mid-container'><FontAwesomeIcon icon={faPhone} /></span> +1 234 567 890</p>
                                <p><span className='mid-container'><FontAwesomeIcon icon={faEnvelope} /></span> yourname@gmail.com</p>
                                <p><span className='mid-container'><FontAwesomeIcon icon={faLocationDot} /></span> Sri Sudarshanarama Purana Maha Viharaya , Godapitiya , Akuressa.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className='mid-container'>Location</h3>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.8853067344066!2d80.4765087!3d6.1039373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1425d5a8d21c1%3A0xbeaaf3a4226b04fa!2sSri%20Sudarshanarama%20Purana%20Maha%20Viharaya%20%2C%20Godapitiya%20%2C%20Akuressa.!5e0!3m2!1sen!2slk!4v1692095678123!5m2!1sen!2slk"
                                title="Location"
                            ></iframe>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <p class="footer-content">
                            Copyright © 2024 Sri Sudarshanarama Purana Maha Viharaya. All Rights Reserved. Powered By<span> </span>
                            
                            <span class="mid-container"><a href="mailto:geeshanthisera1234@gmail.com" class="mid-container">WolfCOdes</a></span>

                        </p>

                        

                    </div>
                </footer>

            </div>
        )
    }
}
