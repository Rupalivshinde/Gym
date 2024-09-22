import React, { useRef } from 'react';
import './Nav.css';
import logo from '/src/assets/logo.png';
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import gsap from 'gsap';
import { Link } from 'react-scroll';

function Nav() {
    const mobileMenu = useRef(null);

    const openMenu = () => {
        gsap.to(mobileMenu.current, {
            x: 0, // Move the menu into view from the right
            duration: 0.2, // Duration of the animation
            ease: "power3.inOut", // Smooth easing function
        });
    };

    const closeMenu = () => {
        gsap.to(mobileMenu.current, {
            x: "100%", // Move the menu out of view to the right
            duration: 0.2,
            ease: "power3.inOut",
        });
    };

    return (
        <>
            <div className="nav-container">
                {/* Mobile Navigation */}
                <div className="mobile_container" ref={mobileMenu} style={{ transform: 'translateX(100%)' }}>
                    <div className="mob_nav">
                        <div className="close" onClick={closeMenu}>
                            <IoClose className='close_icon' />
                        </div>
                        <ul>
                            <li>
                                <Link
                                    to="home"
                                    smooth={true}
                                    duration={500}
                                    className="nav-link"
                                    onClick={closeMenu}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="programs"
                                    smooth={true}
                                    duration={500}
                                    className="nav-link"
                                    onClick={closeMenu}
                                >
                                    Programs
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="whyus"
                                    smooth={true}
                                    duration={500}
                                    className="nav-link"
                                    onClick={closeMenu}
                                >
                                    Why Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="plan"
                                    smooth={true}
                                    duration={500}
                                    className="nav-link"
                                    onClick={closeMenu}
                                >
                                    Plans
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="testimonial"
                                    smooth={true}
                                    duration={500}
                                    className="nav-link"
                                    onClick={closeMenu}
                                >
                                    Testimonials
                                </Link>
                            </li>
                        </ul>
                        <div className="logo" style={{ paddingTop: "7rem" }}>
                            <img style={{ height: "70px" }} src={logo} alt="Logo" />
                        </div>
                    </div>
                </div>

                {/* Main Navigation */}
                <div className="nav">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <ul className="nav-links">
                        <li><Link to="home" smooth={true} duration={500} className="nav-link">Home</Link></li>
                        <li><Link to="programs" smooth={true} duration={500} className="nav-link">Programs</Link></li>
                        <li><Link to="whyus" smooth={true} duration={500} className="nav-link">Why Us</Link></li>
                        <li><Link to="plan" smooth={true} duration={500} className="nav-link">Plans</Link></li>
                        <li><Link to="testimonial" smooth={true} duration={500} className="nav-link">Testimonials</Link></li>
                    </ul>
                    <div className="right">
                        {/* Open Menu Icon */}
                        <div className="menu" onClick={openMenu}>
                            <FaBarsStaggered className='menu_icon' />
                        </div>
                        <button className="join-button">
                            <Link to="footer" smooth={true} duration={500}>Join Now</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
