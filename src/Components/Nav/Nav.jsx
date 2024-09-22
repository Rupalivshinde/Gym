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
            duration: 0.1, // Duration of the animation
            ease: "power3.inOut", // Smooth easing function
        });
    };

    const closeMenu = () => {
        gsap.to(mobileMenu.current, {
            x: "100%", // Move the menu out of view to the right
            duration: 0.1,
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
                        <div className="logo" style={{ paddingTop: "4rem" }}>
                            <img style={{ height: "50px" }} src={logo} alt="Logo" />
                        </div>
                        <div className="links">
                            <img src="data:image/png;base64,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" alt="" />
                            <img src="data:image/png;base64,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" alt="" />
                            <img src="data:image/png;base64,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" alt="" />

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
