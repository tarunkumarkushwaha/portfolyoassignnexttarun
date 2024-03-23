"use client"
import { useCallback, useEffect, useRef, useState } from 'react'
import menu from '../assets/images/menu.svg'
import user from '../assets/images/user.svg'
import { NavLink } from 'react-router-dom'

const Navbar = ({ data, skills, home, about, services, contacts, portfolio, testimonials }) => {
    const [menuOpen, setmenuOpen] = useState(false)

    const toggleNav = function () {
        setmenuOpen(!menuOpen)
    }

    const menuRef = useRef();

    const closeOpenMenus = useCallback(
        (e) => {
            if (
                menuRef.current &&
                menuOpen &&
                !menuRef.current.contains(e.target)
            ) {
                setmenuOpen(false);
            }
        },
        [menuOpen]
    );

    useEffect(() => {
        document.addEventListener("mousedown", closeOpenMenus);
    }, [closeOpenMenus]);

    return (
        <>
            <header className="header" data-header>
                <div className="container">

                    <NavLink to="/" className="logo">
                        <p className="imglogo">{data.user.about.name.trim()[0]}</p>
                    </NavLink>

                    <button className={`nav-open-btn`} aria-label="open menu" onClick={toggleNav} data-nav-toggler>
                        <img src={menu} width="17" height="17" alt="menu icon" />
                    </button>

                    <nav ref={menuRef} className={`navbar ${menuOpen && "active"}`} data-navbar>

                        <div className="navbar-top">
                            <NavLink to="/" className="logo">
                                <p className="imglogo">{data.user.about.name.trim()[0]}</p>
                            </NavLink>

                            <button className="nav-close-btn" aria-label="close menu" onClick={toggleNav} data-nav-toggler>
                                <span className="span one"></span>
                                <span className="span two"></span>
                            </button>
                        </div>

                        <ul className="navbar-list">

                            <li className="navbar-item">
                                <div onClick={() => home.current.scrollIntoView()} className="navbar-link" data-nav-link>Home</div>
                            </li>

                            <li className="navbar-item">
                                <div onClick={() => about.current.scrollIntoView()} className="navbar-link" data-nav-link>About</div>
                            </li>

                            <li className="navbar-item">
                                <div onClick={() => services.current.scrollIntoView()} className="navbar-link" data-nav-link>Services</div>
                            </li>

                            <li className="navbar-item">
                                <div onClick={() => portfolio.current.scrollIntoView()} className="navbar-link" data-nav-link>Projects</div>
                            </li>

                            <li className="navbar-item">
                                <div onClick={() => skills.current.scrollIntoView()} className="navbar-link" data-nav-link>Skills</div>
                            </li>
                            <li className="navbar-item">
                                <div onClick={() => testimonials.current.scrollIntoView()} className="navbar-link" data-nav-link>Testimonials</div>
                            </li>

                            <li className="navbar-item">
                                <div onClick={() => contacts.current.scrollIntoView()} className="navbar-link" data-nav-link>Contact us</div>
                            </li>

                        </ul>

                        <button className="login-btn">
                            <img src={user} width="21" height="21" alt="user icon" />

                            <span className="span">Login</span>
                        </button>

                        <div className="flex-col">
                            <div><p className="navbar-title">My Address</p>

                                <address className="navbar-text">
                                    {data.user.about.address}
                                </address></div>

                            <p className="navbar-text">
                                For enquiry call at
                                <a href={data.user.about.phoneNumber} className="contact-link">{data.user.about.phoneNumber}</a>
                            </p>
                        </div>

                    </nav>

                    <div className={`overlay ${menuOpen && "active"}`} data-nav-toggler data-overlay></div>

                </div>
            </header>
        </>
    )
}

export default Navbar