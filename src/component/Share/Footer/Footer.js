import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faFacebook, faGithub, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    return (
        <section className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer-first-part mt-5">
                            <div className=" item mt-5">
                                
                                <div className="home-town">
                                
                                <p> <span className='mr-5'><FontAwesomeIcon icon={faLocationArrow} /></span>    H00(0thFlor),Road Mirpur 10</p>
                                <p className='need-customize'>New DOHS, Mirpur10</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="footer-container ">
                            <div className="footer-cap ">
                                <h6 className='py-5'>Our Company</h6>
                            </div>
                            <div className="list-part">
                                <ul>
                                    <li>
                                        <Link>About</Link>
                                    </li>
                                    <li>
                                        <Link>Project</Link>
                                    </li>
                                    <li>
                                        <Link>Our Team</Link>
                                    </li>
                                    <li>
                                        <Link>Terms Condition</Link>
                                    </li>
                                    <li>
                                        <Link>Submit Listing</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-container">
                            <div className="footer-cap">
                                <h6 className='py-5'>Quicks Link</h6>
                            </div>
                            <div className="list-part">
                                <ul>
                                    <li>
                                        <Link>Quicks Link</Link>
                                    </li>
                                    <li>
                                        <Link>Rentals</Link>
                                    </li>
                                    <li>
                                        <Link>Sales</Link>
                                    </li>
                                    <li>
                                        <Link>Contact</Link>
                                    </li>
                                    <li>
                                        <Link>Our Blog</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="footer-container">
                            <div className="footer-cap">
                                <h6 className='py-5'>Quicks Link</h6>
                            </div>
                            <div className="about-us">
                                <p>Photography for me is not looking, it’s feeling. If you can’t feel what you’re looking at then,
                                you’re never going to get others to feel anything when
                                they look at your pictures.</p>
                            </div>
                            <div className="social-icon">
                                <p>follow us - </p>
                            <Link><FontAwesomeIcon icon={faFacebook} /></Link>
                            <Link><FontAwesomeIcon icon={faTwitter} /></Link>
                            <Link><FontAwesomeIcon icon={faGithub} /></Link>
                            <Link><FontAwesomeIcon icon={faYoutube} /></Link>
                            </div>
                        </div>
                    </div>
                    <div className="creator-the-website text-center">
            <p>All rights are reserve by {(new Date().getFullYear())} <Link>Riaz</Link></p>
            </div>
                </div>
            </div>
            
        </section>
    );
};

export default Footer;