import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav-style.css";

const NavBar: React.FC = () => {
    return (
        <>
            <header className="">
                {/* Social Links Bar */}
                <div className="py-0">
                    <div className=" contact-line py-3">
                        <div className="container top-bar d-flex justify-content-end align-items-center">

                            <div className="social-links">
                                <a href="#" className="contact-link-item link-me">
                                    <i className="bi bi-telephone" style={{ marginRight: "5px" }} /> <span> (+224) 662-15-77-46 </span>
                                </a>
                                <a href="#" className="contact-link-item link-me">
                                    <i className="bi bi-envelope-at" style={{ marginRight: "5px" }} /> etskanteetfreres@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Main Navigation Bar */}
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <div className="container">
                            {/* Logo */}
                            <Link to="/" className="navbar-brand">
                                <h5 className="logo-text logo-text-size">
                                    KANTE & FRERES-SARLU
                                </h5>
                            </Link>

                            {/* Burger Menu Button */}
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarNav"
                                aria-controls="navbarNav"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            {/* Links */}
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ml-auto">

                                    <li className="nav-item">
                                        <Link to="/" className="nav-link">
                                            Services
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/collaboration" className="nav-link">
                                            Collaboration
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/contact" className="nav-link">
                                            Contacts
                                        </Link>
                                    </li>

                                </ul>


                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default NavBar;
