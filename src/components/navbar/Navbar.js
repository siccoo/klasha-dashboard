import React from 'react';
import Avatar from "../../images/users.svg";
import Notification from "../../images/notification.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <nav className="navbar">
            <div className="nav__icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                <p>Balances</p>
                <span>Today, 19th October 2020</span>
            </div>
            <div className="navbar__right">
                <a>
                    <img />
                </a>
            </div>
        </nav>
    )
}

export default Navbar
