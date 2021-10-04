import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <Container>
            <div className="footer__component my-3 py-3">
                <div className="container">
                    <div className="footer_main py-5">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="download-icons p-2">
                                    <h6 className="mb-3"> Subscribe</h6>
                                    <form>
                                        <div className="mb-3">
                                            <input type="email" className="form-control" placeholder="Enter Your Email..." />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="footer-menu p-2">
                                    <h6 className="mb-3"> Menu </h6>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#privacy"> Privacy Policy </a>
                                        </li>
                                        <li>
                                            <a href="#cookies"> Cookie Policy </a>
                                        </li>
                                        <li>
                                            <a href="#purchasing"> Purchasing Policy </a>
                                        </li>
                                        <li>
                                            <a href="#terms"> Terms &amp; Conditions </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="p-2">
                                    <h6 className="mb-3"> Contact Us </h6>
                                    <p>
                                        House #__, Road #__,
                                        <br />
                                        Dhanmondi, Dhaka-____.
                                    </p>
                                    <p>Email: support@gmail.com.bd</p>
                                    <p>Contact no: +8801711111111</p>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="social-icons float-md-end p-2">
                                    <h6 className="mb-3">Get in Touch</h6>
                                    {/* <a href="https://facebook.com" className="social_bg facebook-bg">
                                <FaFacebookF />
                            </a>
                            <a href="https://iastagram.com" className="social_bg instagram-bg">
                                <AiOutlineInstagram />
                            </a>
                            <a href="https://youtube.com" className="social_bg youtube-bg">
                                <AiOutlineYoutube />
                            </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <p className="text-center pt-3">
                        &copy; 2021 All rights reserved.
                    </p>
                </div>
            </div>
        </Container>

    );
};

export default Footer;